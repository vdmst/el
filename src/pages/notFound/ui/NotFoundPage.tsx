import { LinkButton } from '@/shared/ui/LinkButton'
import { EAppRoutes } from '@/shared/config'

const NotFoundPage = () => {
    return (
        <section className="panel">
            <h2>Страница не найдена</h2>
            <LinkButton to={EAppRoutes.STUDENTS}>Перейти к списку учеников</LinkButton>
        </section>
    )
}

export default NotFoundPage
