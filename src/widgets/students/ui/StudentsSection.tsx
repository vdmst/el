import { useFetchStudentsQuery } from '@/entities/student'
import {
    StudentsFilters,
    selectStudentsParams,
    useStudentsUrlSync,
} from '@/features/studentsFilters'
import { useAppSelector } from '@/shared/lib'
import { EmptyState } from '@/shared/ui/EmptyState'
import { ErrorMessage } from '@/shared/ui/ErrorMessage'
import { Spinner } from '@/shared/ui/Spinner'
import { StudentsTable } from './StudentsTable'

export const StudentsSection = () => {
    useStudentsUrlSync()
    const studentsParams = useAppSelector(selectStudentsParams)
    const { data: students, isLoading, isError } = useFetchStudentsQuery(studentsParams)

    return (
        <section className="panel">
            <StudentsFilters />

            {isLoading ? <Spinner /> : null}
            {isError ? <ErrorMessage message="Не удалось загрузить список учеников" /> : null}
            {!isLoading && !isError && students?.length === 0 ? (
                <EmptyState title="По текущим фильтрам учеников не найдено" />
            ) : null}
            {!isLoading && !isError && students && students.length > 0 ? (
                <StudentsTable students={students} />
            ) : null}
        </section>
    )
}
