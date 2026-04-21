import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { StudentFilterStatus, StudentsSort } from '@/entities/student'
import type { StudentsFiltersState } from './studentsFiltersTypes'

const initialState: StudentsFiltersState = {
    search: '',
    status: 'all',
    sort: 'newest',
}

export const studentsFiltersSlice = createSlice({
    name: 'studentsFilters',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setStatus: (state, action: PayloadAction<StudentFilterStatus>) => {
            state.status = action.payload
        },
        setSort: (state, action: PayloadAction<StudentsSort>) => {
            state.sort = action.payload
        },
    },
})

export const { setSearch, setStatus, setSort } = studentsFiltersSlice.actions

export default studentsFiltersSlice.reducer
