export type StudentStatus = 'active' | 'excluded'
export type StudentFilterStatus = 'all' | StudentStatus
export type StudentsSort = 'newest' | 'oldest'

export interface Student {
    id: number
    name: string
    email: string
    phone: string
    course: string
    status: StudentStatus
    registeredAt: string
    completedHomeworks: number
    managerComment: string
}

export interface StudentsParams {
    search: string
    status: StudentFilterStatus
    sort: StudentsSort
}

export interface StudentUpdatePayload {
    id: number
    status: StudentStatus
    managerComment: string
}

export interface StudentCreatePayload {
    name: string
    email: string
    phone: string
    course: string
    status: StudentStatus
}
