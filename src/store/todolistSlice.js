import { createSlice } from '@reduxjs/toolkit';

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, { payload }) {
            state.items.push(payload);
        },
        executeItem(state, { payload }) {
            const { id } = payload;
            const { items } = state;

            const item = items[id];
            items.splice(id, 1);

            item.done = !item.done;

            if (item.done) {
                state.items.push(item);
            } else {
                state.items.unshift(item);
            }
        },
        deleteItem(state, { payload }) {
            const { id } = payload;

            state.items.splice(id, 1);
        },
    }
});

export const { addItem, executeItem, deleteItem } = todolistSlice.actions;

export default todolistSlice.reducer;
