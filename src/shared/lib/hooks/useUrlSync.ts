import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

interface UrlSyncConfig<T extends Record<string, unknown>> {
    urlToState: (searchParams: URLSearchParams) => void
    stateToUrl: (params: T) => Record<string, string | string[]>
    dependencies: T
}

export const useUrlSync = <T extends Record<string, unknown>>({
    urlToState,
    stateToUrl,
    dependencies,
}: UrlSyncConfig<T>) => {
    const isInitialMount = useRef(true)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        urlToState(searchParams)
        isInitialMount.current = false
    }, [])

    useEffect(() => {
        if (isInitialMount.current) return

        setSearchParams(
            (prev) => {
                const next = new URLSearchParams(prev)
                const urlParams = stateToUrl(dependencies)

                Object.entries(urlParams).forEach(([key, value]) => {
                    if (!value || (Array.isArray(value) && value.length === 0)) {
                        next.delete(key)
                    } else {
                        next.set(key, Array.isArray(value) ? value.join(',') : value)
                    }
                })

                return next
            },
            { replace: true }
        )
    }, Object.values(dependencies))
}
