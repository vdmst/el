import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    useFetchStudentByIdQuery,
    useUpdateStudentMutation,
    type StudentStatusType,
} from '@/entities/student'
import { EAppRoutes } from '@/shared/config'
import { LinkButton } from '@/shared/ui/LinkButton'
import { ErrorMessage } from '@/shared/ui/ErrorMessage'
import { Spinner } from '@/shared/ui/Spinner'
import { StudentDetailsCard } from './StudentDetailsCard'
import { StudentEditorForm } from './StudentEditorForm'

export const StudentDetailsSection = () => {
    const { studentId } = useParams()
    const id = Number(studentId)
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [saveError, setSaveError] = useState<string>('')

    const {
        data: student,
        isLoading,
        isError,
    } = useFetchStudentByIdQuery(id, { skip: Number.isNaN(id) })
    const [updateStudent, { isLoading: isSaving }] = useUpdateStudentMutation()

    const onSave = async (status: StudentStatusType, managerComment: string) => {
        if (!student) return

        setSuccessMessage('')
        setSaveError('')

        try {
            await updateStudent({ id: student.id, status, managerComment }).unwrap()
            setSuccessMessage('Изменения сохранены')
        } catch {
            setSaveError('Не удалось сохранить изменения')
        }
    }

    if (Number.isNaN(id)) {
        return <ErrorMessage message="Некорректный идентификатор ученика" />
    }

    if (isLoading) {
        return <Spinner />
    }

    if (isError || !student) {
        return <ErrorMessage message="Не удалось открыть карточку ученика" />
    }

    return (
        <section className="panel">
            <div className="page-header">
                <h2>Карточка ученика</h2>
                <LinkButton to={EAppRoutes.STUDENTS}>К списку</LinkButton>
            </div>

            <div className="details-grid">
                <StudentDetailsCard student={student} />

                <StudentEditorForm
                    student={student}
                    isSaving={isSaving}
                    onSave={onSave}
                    saveError={saveError}
                    successMessage={successMessage}
                />
            </div>
        </section>
    )
}
