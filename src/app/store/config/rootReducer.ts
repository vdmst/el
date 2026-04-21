import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api'
import { studentsFiltersSlice } from '@/features/studentsFilters'

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    studentsFilters: studentsFiltersSlice,
})
