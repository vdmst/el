import { Provider } from 'react-redux'
import type { ChildrenProp } from '@/shared/model'
import { store } from '@/app/store'

type Props = {
    children: ChildrenProp
}

export const StoreProvider = (props: Props) => {
    const { children } = props

    return <Provider store={store}>{children}</Provider>
}
