import { StudentStatus } from '@/entities/student/ui/StudentStatus/StudentStatus'
import type { Student } from '@/entities/student/model/types'
import { EAppRoutes } from '@/shared/config'
import { formatDate } from '@/shared/lib'
import { LinkButton } from '@/shared/ui/LinkButton'

type Props = {
    students: Student[]
}

export const StudentsTable = (props: Props) => {
    const { students } = props

    return (
        <div className="students-table-wrap">
            <table className="students-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Имя</th>
                        <th>Email</th>
                        <th>Курс</th>
                        <th>Статус</th>
                        <th>Дата регистрации</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                            <td>
                                <StudentStatus status={student.status} />
                            </td>
                            <td>{formatDate(student.registeredAt)}</td>
                            <td className="row-actions">
                                <LinkButton
                                    to={EAppRoutes.STUDENT_DETAILS.replace(
                                        ':studentId',
                                        String(student.id)
                                    )}
                                >
                                    Открыть
                                </LinkButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
