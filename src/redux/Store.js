import {configureStore} from "@reduxjs/toolkit";
import Todoslice from './TodoSlice'

const TodoStore = configureStore({
    reducer:{
        TodoReducer : Todoslice
    }
})

export default TodoStore