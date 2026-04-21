import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateStudentMutation, type StudentCreatePayload } from '@/entities/student'
import { EAppRoutes } from '@/shared/config'
import { LinkButton } from '@/shared/ui/LinkButton'
import { StudentCreateForm } from './StudentCreateForm'

export const StudentCreateSection = () => {
    const navigate = useNavigate()
    const [submitError, setSubmitError] = useState<string>('')
    const [createStudent, { isLoading }] = useCreateStudentMutation()

    const onSubmit = async (payload: StudentCreatePayload) => {
        setSubmitError('')

        try {
            const createdStudent = await createStudent(payload).unwrap()
            navigate(EAppRoutes.STUDENT_DETAILS.replace(':studentId', String(createdStudent.id)))
        } catch {
            setSubmitError('Не удалось создать ученика')
        }
    }

    return (
        <section className="panel">
            <div className="page-header">
                <h2>Создание ученика</h2>
                <LinkButton to={EAppRoutes.STUDENTS}>К списку</LinkButton>
            </div>

            <StudentCreateForm
                isLoading={isLoading}
                submitError={submitError}
                onSubmit={onSubmit}
            />
        </section>
    )
}
