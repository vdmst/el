import type { StudentFilterStatus, StudentsSort } from '@/entities/student'

export interface StudentsFiltersState {
    search: string
    status: StudentFilterStatus
    sort: StudentsSort
}
