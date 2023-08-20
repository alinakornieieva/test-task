import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    type: null,
    currentSorting: 'Last created',
    items: [
        { id: 1, request: 'order', cityFrom: 'Warsaw', cityTo: 'Berlin', type: 'clothes', date: '2023-09-26', description: '' },
    ],
    modal: null
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
            console.log(action.payload)
        },
        editItem: (state, action) => {
            const index = state.items.findIndex((item) => {
                if (item.id === action.payload.id) return true
            })
            state.items[index] = { ...action.payload }
        },
        changeType: (state, action) => {
            state.type = action.payload
        },
        changeSorting: (state, action) => {
            state.currentSorting = action.payload
        },
        toggleModal: (state, action) => {
            const index = state.items.findIndex((item) => {
                if (item.id === action.payload) return true
            })
            state.modal = state.items[index]
        }
    }
})

const { reducer, actions } = slice
export default reducer
export const { deleteItem, addItem, editItem, changeType, changeSorting, toggleModal } = actions