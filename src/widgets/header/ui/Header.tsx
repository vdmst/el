import { LinkButton } from '@/shared/ui/LinkButton'
import { EAppRoutes } from '@/shared/config'

export const Header = () => {
    return (
        <header className="header">
            <div className="container header-inner">
                <h1 className="header-title">Панель управления учениками</h1>
                <LinkButton to={EAppRoutes.NEW_STUDENT} variant="primary">
                    Создать ученика
                </LinkButton>
            </div>
        </header>
    )
}
