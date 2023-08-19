import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice'

const store = configureStore({
    reducer: { requests: reducer }
})

export default store