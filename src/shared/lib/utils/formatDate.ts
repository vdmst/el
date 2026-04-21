export const formatDate = (value: string): string =>
    new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(value))
