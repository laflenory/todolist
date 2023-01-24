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

            document.body.style.overflowY = 'hidden';
        },
        closeModal(state) {
            state.open = false;
            state.target = null;
            state.id = null;

            document.body.style.overflowY = '';
        },
    },
});

export const { 
    openModal, 
    closeModal,
} = modalSlice.actions;

export default modalSlice.reducer;
