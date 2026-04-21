import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
    label: string
    error?: string
}>

export const FormField = (props: Props) => {
    const { label, error, children } = props

    return (
        <label className="field">
            <span className="field-label">{label}</span>
            {children}
            {error ? <span className="hint-error">{error}</span> : null}
        </label>
    )
}
