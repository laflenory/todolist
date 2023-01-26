import { createSlice } from '@reduxjs/toolkit';

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, { payload }) {
            const { items } = state;
            const id = items.length;

            state.items.unshift({ ...payload, id });
        },
        updateItem(state, { payload }) {
            const { items } = state;
            const { title, description, id } = payload;

            let item = items.find((item) => item.id === id);
            const index = items.indexOf(item);

            item = {
                ...item,
                title,
                description,
            };

            items[index] = item;
            state.items = items;
        },
        executeItem(state, { payload }) {
            let { items } = state;
            const { id } = payload;

            let item = items.find((item) => item.id === id);
            items = items.filter((item) => item.id !== id);

            item = { ...item, done: !item.done };

            item.done
                ? state.items = [...items, item]
                : state.items = [item, ...items];
        },
        deleteItem(state, { payload }) {
            const { items } = state;
            const { id } = payload;

            state.items = items.filter((item) => item.id !== id);
        },
    },
});

export const { addItem, updateItem, executeItem, deleteItem } = todolistSlice.actions;

export default todolistSlice.reducer;
