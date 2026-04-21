import type { PropsWithChildren, SelectHTMLAttributes } from 'react'
import { FormField } from '../FormField'
import { Select } from '@/shared/ui/Select'

type Props = PropsWithChildren<
    SelectHTMLAttributes<HTMLSelectElement> & {
        label: string
        error?: string
    }
>

export const SelectField = (props: Props) => {
    const { label, error, children, ...selectProps } = props

    return (
        <FormField label={label} error={error}>
            <Select {...selectProps}>{children}</Select>
        </FormField>
    )
}
