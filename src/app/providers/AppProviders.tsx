import { StoreProvider } from './StoreProvider'
import type { ChildrenProp } from '@/shared/model'

type Props = {
    children: ChildrenProp
}

export const AppProviders = (props: Props) => {
    const { children } = props

    return <StoreProvider>{children}</StoreProvider>
}
