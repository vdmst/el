import type { StudentCreatePayload } from '@/entities/student'
import { ExamSubjects } from '@/entities/student'

export interface StudentCreateFormValues {
    name: string
    email: string
    phone: string
    course: string
    status: StudentCreatePayload['status']
}

export type StudentCreateFormErrors = Partial<Record<keyof StudentCreateFormValues, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedPhonePattern = /^[+\d\s()-]+$/

export const validateStudentCreateForm = (
    values: StudentCreateFormValues
): StudentCreateFormErrors => {
    const errors: StudentCreateFormErrors = {}

    if (!values.name.trim()) errors.name = 'Имя обязательно'

    if (!values.email.trim()) {
        errors.email = 'Email обязателен'
    } else if (!emailPattern.test(values.email.trim())) {
        errors.email = 'Email должен быть валидным'
    }

    const normalizedPhone = values.phone.replace(/\D/g, '')

    if (!values.phone.trim()) {
        errors.phone = 'Телефон обязателен'
    } else if (!allowedPhonePattern.test(values.phone.trim())) {
        errors.phone = 'Телефон содержит недопустимые символы'
    } else if (normalizedPhone.length < 10 || normalizedPhone.length > 15) {
        errors.phone = 'Телефон должен содержать от 10 до 15 цифр'
    }
    if (!values.course.trim()) {
        errors.course = 'Курс обязателен'
    } else if (!ExamSubjects.includes(values.course as (typeof ExamSubjects)[number])) {
        errors.course = 'Выберите курс из списка'
    }
    if (!values.status) errors.status = 'Статус обязателен'

    return errors
}
