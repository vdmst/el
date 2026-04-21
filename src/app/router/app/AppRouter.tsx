import { RouterProvider } from 'react-router-dom'
import { router } from '../config/createRouter'

export const AppRouter = () => {
    return <RouterProvider router={router} />
}
