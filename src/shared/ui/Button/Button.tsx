import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Variant = 'primary' | 'secondary'

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren<{
        variant?: Variant
    }>

const getClassName = (variant: Variant): string =>
    variant === 'primary' ? 'button button-primary' : 'button button-secondary'

export const Button = (props: Props) => {
    const { variant = 'secondary', children, className = '', ...rest } = props

    return (
        <button className={`${getClassName(variant)} ${className}`.trim()} {...rest}>
            {children}
        </button>
    )
}
