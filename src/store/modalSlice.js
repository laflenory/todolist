import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false,
        target: null,
        id: null,
    },
    reducers: {
        openModal(state, { payload }) {
            const { target, id } = payload;

            state.open = true;
            state.target = target;
            state.id = id;
        },
        closeModal(state) {
            state.open = false;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
