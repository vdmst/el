import type {
    Student,
    StudentCreatePayload,
    StudentFilterStatus,
    StudentUpdatePayload,
    StudentsSort,
} from '../model/types'

const wait = (ms: number): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(resolve, ms)
    })

let studentsDb: Student[] = [
    {
        id: 1,
        name: 'Анна Смирнова',
        email: 'anna.smirnova@school.test',
        phone: '+7 900 100-00-01',
        course: 'Русский язык',
        status: 'active',
        registeredAt: '2025-10-11T09:45:00.000Z',
        completedHomeworks: 17,
        managerComment: 'Стабильный прогресс, нужен выход на pet-проект.',
    },
    {
        id: 2,
        name: 'Иван Петров',
        email: 'ivan.petrov@school.test',
        phone: '+7 900 100-00-02',
        course: 'Математика',
        status: 'excluded',
        registeredAt: '2025-06-03T14:10:00.000Z',
        completedHomeworks: 4,
        managerComment: 'Приостановил обучение по личным причинам.',
    },
    {
        id: 3,
        name: 'Мария Орлова',
        email: 'maria.orlova@school.test',
        phone: '+7 900 100-00-03',
        course: 'Информатика',
        status: 'active',
        registeredAt: '2026-01-28T08:30:00.000Z',
        completedHomeworks: 21,
        managerComment: 'Готова к собеседованиям на junior-позиции.',
    },
    {
        id: 4,
        name: 'Кирилл Максимов',
        email: 'kirill.maximov@school.test',
        phone: '+7 900 100-00-04',
        course: 'Обществознание',
        status: 'active',
        registeredAt: '2025-12-20T16:55:00.000Z',
        completedHomeworks: 12,
        managerComment: 'Нужна регулярная обратная связь по SQL.',
    },
]

const byNewest = (a: Student, b: Student): number =>
    new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime()

const sortStudents = (students: Student[], sort: StudentsSort): Student[] =>
    sort === 'newest' ? students.sort(byNewest) : students.sort((a, b) => byNewest(b, a))

const filterByStatus = (student: Student, status: StudentFilterStatus): boolean =>
    status === 'all' ? true : student.status === status

const copyStudent = (student: Student): Student => ({ ...student })

export const mockStudentsDb = {
    async getStudents(
        search: string,
        status: StudentFilterStatus,
        sort: StudentsSort
    ): Promise<Student[]> {
        await wait(350)

        const normalizedSearch = search.trim().toLowerCase()

        return sortStudents(
            studentsDb
                .filter((item) => filterByStatus(item, status))
                .filter((item) =>
                    normalizedSearch.length === 0
                        ? true
                        : item.name.toLowerCase().includes(normalizedSearch)
                )
                .map(copyStudent),
            sort
        )
    },

    async getStudentById(id: number): Promise<Student> {
        await wait(250)

        const student = studentsDb.find((item) => item.id === id)
        if (!student) {
            throw new Error('Ученик не найден')
        }

        return copyStudent(student)
    },

    async updateStudent(payload: StudentUpdatePayload): Promise<Student> {
        await wait(300)

        const index = studentsDb.findIndex((item) => item.id === payload.id)
        if (index < 0) {
            throw new Error('Не удалось сохранить изменения')
        }

        const updatedStudent: Student = {
            ...studentsDb[index],
            status: payload.status,
            managerComment: payload.managerComment.trim(),
        }

        studentsDb[index] = updatedStudent
        return copyStudent(updatedStudent)
    },

    async createStudent(payload: StudentCreatePayload): Promise<Student> {
        await wait(450)

        const nextId = studentsDb.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1
        const createdStudent: Student = {
            id: nextId,
            ...payload,
            registeredAt: new Date().toISOString(),
            completedHomeworks: 0,
            managerComment: '',
        }

        studentsDb = [createdStudent, ...studentsDb]

        return copyStudent(createdStudent)
    },
}
