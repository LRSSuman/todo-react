import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
        },
        deleteTodo(state, action) {
            const deleteIndex = action.payload;
            return state.filter((val, index) => {
                return index !== deleteIndex;
            });
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
