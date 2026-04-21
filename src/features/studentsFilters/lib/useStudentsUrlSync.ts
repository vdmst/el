import { useDispatch } from 'react-redux'
import { setSearch, setSort, setStatus } from '../model/studentsFiltersSlice'
import { useAppSelector, useUrlSync } from '@/shared/lib'
import { selectStudentsParams } from '../model/studentsFiltersSelectors'
import type { StudentFilterStatus, StudentsSort } from '@/entities/student'

const allowedStatuses: StudentFilterStatus[] = ['all', 'active', 'excluded']
const allowedSorts: StudentsSort[] = ['newest', 'oldest']

export const useStudentsUrlSync = () => {
    const dispatch = useDispatch()
    const studentsParams = useAppSelector(selectStudentsParams)

    useUrlSync({
        urlToState: (searchParams) => {
            const searchFromUrl = searchParams.get('search')
            const statusFromUrl = searchParams.get('status')
            const sortFromUrl = searchParams.get('sort')

            if (searchFromUrl) dispatch(setSearch(searchFromUrl))

            if (statusFromUrl && allowedStatuses.includes(statusFromUrl as StudentFilterStatus)) {
                dispatch(setStatus(statusFromUrl as StudentFilterStatus))
            }

            if (sortFromUrl && allowedSorts.includes(sortFromUrl as StudentsSort)) {
                dispatch(setSort(sortFromUrl as StudentsSort))
            }
        },
        stateToUrl: (params) => ({
            search: params.search,
            status: params.status === 'all' ? '' : params.status,
            sort: params.sort === 'newest' ? '' : params.sort,
        }),
        dependencies: studentsParams,
    })
}
