import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    type: null,
    currentSorting: 'Last created',
    items: JSON.parse(localStorage.getItem('requests')) || [],
    modal: null
}

const changeLocalStorage = (data) => {
    localStorage.setItem('requests', JSON.stringify(data))
}

const slice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            changeLocalStorage(state.items)
        },
        addItem: (state, action) => {
            state.items.push(action.payload)
            changeLocalStorage(state.items)
        },
        editItem: (state, action) => {
            const index = state.items.findIndex((item) => {
                if (item.id === action.payload.id) return true
            })
            state.items[index] = { ...action.payload }
            changeLocalStorage(state.items)
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