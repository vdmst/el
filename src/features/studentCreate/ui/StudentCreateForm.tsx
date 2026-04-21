import { useState, type FormEvent } from 'react'
import { Button } from '@/shared/ui/Button'
import { ExamSubjects, type StudentCreatePayload } from '@/entities/student'
import { StudentCreateFields } from './StudentCreateFields'
import {
    validateStudentCreateForm,
    type StudentCreateFormErrors,
    type StudentCreateFormValues,
} from '../model/validation'

type Props = {
    isLoading: boolean
    submitError?: string
    onSubmit: (payload: StudentCreatePayload) => Promise<void>
}

const initialState: StudentCreateFormValues = {
    name: '',
    email: '',
    phone: '',
    course: ExamSubjects[0],
    status: 'active',
}

export const StudentCreateForm = (props: Props) => {
    const { isLoading, submitError, onSubmit } = props
    const [form, setForm] = useState<StudentCreateFormValues>(initialState)
    const [errors, setErrors] = useState<StudentCreateFormErrors>({})

    const onFieldChange = <K extends keyof StudentCreateFormValues>(
        field: K,
        value: StudentCreateFormValues[K]
    ) => {
        setForm((prev) => {
            const nextForm = { ...prev, [field]: value }
            setErrors(validateStudentCreateForm(nextForm))
            return nextForm
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const nextErrors = validateStudentCreateForm(form)
        setErrors(nextErrors)

        if (Object.keys(nextErrors).length > 0) {
            return
        }

        await onSubmit({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            course: form.course,
            status: form.status,
        })
    }

    return (
        <form className="form-grid" onSubmit={(event) => void handleSubmit(event)} noValidate>
            <StudentCreateFields values={form} errors={errors} onFieldChange={onFieldChange} />

            <div className="field">
                <span className="field-label">Действие</span>
                <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? 'Создание...' : 'Создать ученика'}
                </Button>
                {submitError ? <span className="hint-error">{submitError}</span> : null}
            </div>
        </form>
    )
}
