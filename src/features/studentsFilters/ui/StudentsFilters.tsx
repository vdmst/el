import { selectStudentsParams, setSearch, setSort, setStatus } from '@/features/studentsFilters'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { SelectField, TextField } from '@/shared/ui/FormField'
import type { StudentFilterStatus, StudentsSort } from '@/entities/student'

export const StudentsFilters = () => {
    const dispatch = useAppDispatch()
    const { search, status, sort } = useAppSelector(selectStudentsParams)

    return (
        <div className="filters-grid">
            <TextField
                label="Поиск по имени"
                value={search}
                onChange={(event) => dispatch(setSearch(event.target.value))}
                placeholder="Введите имя"
            />

            <SelectField
                label="Фильтр по статусу"
                value={status}
                onChange={(event) => dispatch(setStatus(event.target.value as StudentFilterStatus))}
            >
                <option value="all">Все</option>
                <option value="active">Активный</option>
                <option value="excluded">Исключен</option>
            </SelectField>

            <SelectField
                label="Сортировка по дате"
                value={sort}
                onChange={(event) => dispatch(setSort(event.target.value as StudentsSort))}
            >
                <option value="newest">Сначала новые</option>
                <option value="oldest">Сначала старые</option>
            </SelectField>
        </div>
    )
}
