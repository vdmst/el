import { Suspense } from 'react'
import Main from '@/app/layouts/Main'
import { EAppRoutes } from '@/shared/config'
import { Spinner } from '@/shared/ui/Spinner'
import { NotFoundPageLazy } from '@/pages/notFound'
import { StudentCreatePageLazy } from '@/pages/studentCreate'
import { StudentDetailsPageLazy } from '@/pages/studentDetails'
import { StudentsPageLazy } from '@/pages/students'

export const routes = [
    {
        element: <Main />,
        children: [
            {
                path: EAppRoutes.MAIN,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <StudentsPageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.STUDENTS,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <StudentsPageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.NEW_STUDENT,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <StudentCreatePageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.STUDENT_DETAILS,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <StudentDetailsPageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.NOT_FOUND,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <NotFoundPageLazy />
                    </Suspense>
                ),
            },
        ],
    },
]
