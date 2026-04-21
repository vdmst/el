export { StudentStatus } from './ui/StudentStatus/StudentStatus'

export {
    useFetchStudentsQuery,
    useFetchStudentByIdQuery,
    useUpdateStudentMutation,
    useCreateStudentMutation,
} from './api/studentApi'

export { StudentStatusLabel, ExamSubjects } from './model/constants'

export type {
    Student,
    StudentCreatePayload,
    StudentFilterStatus,
    StudentStatus as StudentStatusType,
    StudentUpdatePayload,
    StudentsParams,
    StudentsSort,
} from './model/types'
