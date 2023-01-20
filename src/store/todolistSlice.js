import { createSlice } from '@reduxjs/toolkit';

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, { payload }) {
            const { title, description } = payload;

            state.items.push({ title, description });
        },
        deleteItem(state, { payload }) {
            const { id } = payload;

            state.items.splice(id, 1);
        },
    }
});

export const { addItem, deleteItem } = todolistSlice.actions;

export default todolistSlice.reducer;
