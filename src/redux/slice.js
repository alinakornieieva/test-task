import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        { id: 1, request: 'order', cityFrom: 'Warsaw', cityTo: 'Berlin', type: 'clothes', date: '28/08/2023', description: '' },
    ]
}

const slice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
    }
})

const { reducer } = slice
export default reducer