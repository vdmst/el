import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { SelectField, TextareaField } from '@/shared/ui/FormField'
import type { Student, StudentStatusType } from '@/entities/student'

type Props = {
    student: Student
    isSaving: boolean
    successMessage?: string
    saveError?: string
    onSave: (status: StudentStatusType, comment: string) => Promise<void>
}

export const StudentEditorForm = (props: Props) => {
    const { student, isSaving, successMessage, saveError, onSave } = props

    const [status, setStatus] = useState<StudentStatusType>(student.status)
    const [comment, setComment] = useState<string>(student.managerComment)

    useEffect(() => {
        setStatus(student.status)
        setComment(student.managerComment)
    }, [student.id, student.status, student.managerComment])

    return (
        <div className="details-card">
            <SelectField
                label="Изменить статус"
                value={status}
                onChange={(event) => setStatus(event.target.value as StudentStatusType)}
            >
                <option value="active">Активный</option>
                <option value="excluded">Исключен</option>
            </SelectField>

            <TextareaField
                label="Комментарий менеджера"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                rows={6}
                placeholder="Введите комментарий"
            />

            <Button
                variant="primary"
                type="button"
                disabled={isSaving}
                onClick={() => void onSave(status, comment)}
            >
                {isSaving ? 'Сохранение...' : 'Сохранить изменения'}
            </Button>

            {successMessage ? <div className="state state-success">{successMessage}</div> : null}
            {saveError ? <div className="state state-error">{saveError}</div> : null}
        </div>
    )
}
