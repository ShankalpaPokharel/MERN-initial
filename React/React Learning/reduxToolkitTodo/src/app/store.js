import {configureStore} from '@reduxjs/toolkit' //from core redux not react redux
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer:todoReducer
}) //this will import and use as a wrapper
