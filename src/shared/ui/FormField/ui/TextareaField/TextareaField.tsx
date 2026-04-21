import type { TextareaHTMLAttributes } from 'react'
import { FormField } from '../FormField'
import { Textarea } from '@/shared/ui/Textarea'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string
    error?: string
}

export const TextareaField = (props: Props) => {
    const { label, error, ...textareaProps } = props

    return (
        <FormField label={label} error={error}>
            <Textarea {...textareaProps} />
        </FormField>
    )
}
