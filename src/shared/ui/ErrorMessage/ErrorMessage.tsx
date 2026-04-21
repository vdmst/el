type Props = {
    message: string
}

export const ErrorMessage = (props: Props) => {
    const { message } = props

    return <div className="state state-error">{message}</div>
}
