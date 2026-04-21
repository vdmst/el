import { StudentStatus } from '@/entities/student/ui/StudentStatus/StudentStatus'
import type { Student } from '@/entities/student/model/types'
import { formatDate } from '@/shared/lib'

type Props = {
    student: Student
}

export const StudentDetailsCard = (props: Props) => {
    const { student } = props

    return (
        <div className="details-card">
            <h3>{student.name}</h3>
            <p>
                <strong>Email:</strong> {student.email}
            </p>
            <p>
                <strong>Телефон:</strong> {student.phone}
            </p>
            <p>
                <strong>Курс:</strong> {student.course}
            </p>
            <p>
                <strong>Статус:</strong> <StudentStatus status={student.status} />
            </p>
            <p>
                <strong>Дата регистрации:</strong> {formatDate(student.registeredAt)}
            </p>
            <p>
                <strong>Выполнено домашних заданий:</strong> {student.completedHomeworks}
            </p>
            <p>
                <strong>Комментарий менеджера:</strong>{' '}
                {student.managerComment || 'Комментарий не добавлен'}
            </p>
        </div>
    )
}
