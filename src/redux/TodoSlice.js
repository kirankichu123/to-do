import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [], 
};

const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    createTodo: (state, action) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload, 
        completed: false, 
      });
    },
    
    
    toggleComplete: (state, action) => {
      const todo = state.todo.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; 
      }
    },
    
    
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter(item => item.id !== action.payload);
    },
  },
});


export const { createTodo, toggleComplete, deleteTodo } = TodoSlice.actions;


export default TodoSlice.reducer;
