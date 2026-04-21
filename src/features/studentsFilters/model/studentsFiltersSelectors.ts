import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store/config/types'

export const selectStudentsFilters = (state: RootState) => state.studentsFilters

export const selectStudentsParams = createSelector(
    [selectStudentsFilters],
    ({ search, status, sort }) => ({
        search,
        status,
        sort,
    })
)
