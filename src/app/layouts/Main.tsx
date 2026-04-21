import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'

const Main = () => {
    return (
        <div className="layout">
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </div>
    )
}

export default Main
