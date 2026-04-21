type Props = {
    title: string
}

export const EmptyState = (props: Props) => {
    const { title } = props

    return <div className="state">{title}</div>
}
