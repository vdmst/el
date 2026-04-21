import type { SelectHTMLAttributes } from 'react'

type Props = SelectHTMLAttributes<HTMLSelectElement>

export const Select = (props: Props) => {
    return <select className="control" {...props} />
}
