import type { InputHTMLAttributes } from 'react'
import { FormField } from '../FormField'
import { Input } from '@/shared/ui/Input'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    error?: string
}

export const TextField = (props: Props) => {
    const { label, error, ...inputProps } = props

    return (
        <FormField label={label} error={error}>
            <Input {...inputProps} />
        </FormField>
    )
}
