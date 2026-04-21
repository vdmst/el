import { mockStudentsDb } from './mockStudentsDb'
import type {
    Student,
    StudentCreatePayload,
    StudentUpdatePayload,
    StudentsParams,
} from '../model/types'
import { baseApi } from '@/shared/api'

export const studentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchStudents: builder.query<Student[], StudentsParams>({
            queryFn: async (params) => {
                try {
                    const data = await mockStudentsDb.getStudents(
                        params.search,
                        params.status,
                        params.sort
                    )
                    return { data }
                } catch {
                    return { error: { status: 'CUSTOM_ERROR', error: 'Ошибка загрузки списка' } }
                }
            },
            providesTags: ['Students'],
        }),
        fetchStudentById: builder.query<Student, number>({
            queryFn: async (id) => {
                try {
                    const data = await mockStudentsDb.getStudentById(id)
                    return { data }
                } catch {
                    return { error: { status: 'CUSTOM_ERROR', error: 'Ошибка загрузки ученика' } }
                }
            },
            providesTags: (_result, _error, id) => [{ type: 'Students', id }],
        }),
        updateStudent: builder.mutation<Student, StudentUpdatePayload>({
            queryFn: async (payload) => {
                try {
                    const data = await mockStudentsDb.updateStudent(payload)
                    return { data }
                } catch {
                    return { error: { status: 'CUSTOM_ERROR', error: 'Ошибка сохранения ученика' } }
                }
            },
            invalidatesTags: (_result, _error, payload) => [
                { type: 'Students', id: payload.id },
                'Students',
            ],
        }),
        createStudent: builder.mutation<Student, StudentCreatePayload>({
            queryFn: async (payload) => {
                try {
                    const data = await mockStudentsDb.createStudent(payload)
                    return { data }
                } catch {
                    return { error: { status: 'CUSTOM_ERROR', error: 'Ошибка создания ученика' } }
                }
            },
            invalidatesTags: ['Students'],
        }),
    }),
    overrideExisting: false,
})

export const {
    useFetchStudentsQuery,
    useFetchStudentByIdQuery,
    useUpdateStudentMutation,
    useCreateStudentMutation,
} = studentApi
