import { ExamSubjects, type StudentCreatePayload } from '@/entities/student'
import type { StudentCreateFormErrors, StudentCreateFormValues } from '../model/validation'
import { SelectField, TextField } from '@/shared/ui/FormField'

type Props = {
    values: StudentCreateFormValues
    errors: StudentCreateFormErrors
    onFieldChange: <K extends keyof StudentCreateFormValues>(
        field: K,
        value: StudentCreateFormValues[K]
    ) => void
}

export const StudentCreateFields = (props: Props) => {
    const { values, errors, onFieldChange } = props

    return (
        <>
            <TextField
                label="Имя"
                value={values.name}
                error={errors.name}
                onChange={(event) => onFieldChange('name', event.target.value)}
            />

            <TextField
                label="Email"
                value={values.email}
                error={errors.email}
                onChange={(event) => onFieldChange('email', event.target.value)}
            />

            <TextField
                label="Телефон"
                value={values.phone}
                error={errors.phone}
                onChange={(event) => onFieldChange('phone', event.target.value)}
            />

            <SelectField
                label="Курс"
                value={values.course}
                error={errors.course}
                onChange={(event) => onFieldChange('course', event.target.value)}
            >
                {ExamSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                        {subject}
                    </option>
                ))}
            </SelectField>

            <SelectField
                label="Статус"
                value={values.status}
                error={errors.status}
                onChange={(event) =>
                    onFieldChange('status', event.target.value as StudentCreatePayload['status'])
                }
            >
                <option value="active">Активный</option>
                <option value="excluded">Исключен</option>
            </SelectField>
        </>
    )
}
