import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    type: null,
    items: [
        { id: 1, request: 'order', cityFrom: 'Warsaw', cityTo: 'Berlin', type: 'clothes', date: '28/08/2023', description: '' },
    ]
}

const slice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        changeType: (state, action) => {
            state.type = action.payload
        }
    }
})

const { reducer, actions } = slice
export default reducer
export const { deleteItem, addItem, changeType } = actions