import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

type Props = PropsWithChildren<{
    to: string
    variant?: Variant
}>

const getClassName = (variant: Variant): string =>
    variant === 'primary' ? 'button button-primary' : 'button button-secondary'

export const LinkButton = (props: Props) => {
    const { variant = 'secondary', children, to } = props

    return (
        <Link to={to} className={getClassName(variant)}>
            {children}
        </Link>
    )
}
