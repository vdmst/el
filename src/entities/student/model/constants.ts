import type { StudentStatus } from './types'

export const StudentStatusLabel: Record<StudentStatus, string> = {
    active: 'Активный',
    excluded: 'Исключен',
}

export const ExamSubjects = [
    'Русский язык',
    'Математика',
    'Физика',
    'Химия',
    'Биология',
    'История',
    'Обществознание',
    'География',
    'Информатика',
    'Литература',
    'Английский язык',
] as const
