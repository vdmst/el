import { StudentStatusLabel } from '@/entities/student'
import type { StudentStatus as StudentStatusType } from '../../model/types'

type Props = {
    status: StudentStatusType
}

const getStatusClassName = (status: StudentStatusType): string =>
    status === 'active' ? 'status-badge active' : 'status-badge excluded'

export const StudentStatus = (props: Props) => {
    const { status } = props

    return <span className={getStatusClassName(status)}>{StudentStatusLabel[status]}</span>
}
