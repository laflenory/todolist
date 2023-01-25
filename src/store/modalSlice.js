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

            const { innerHeight } = window;
            const { scrollHeight } = document.body;

            document.body.style.overflowY = 'hidden';

            if (scrollHeight > innerHeight) {
                document.body.style.marginRight = '16px';
            }
        },
        closeModal(state) {
            state.open = false;
            state.target = null;
            state.id = null;

            document.body.style.overflowY = '';
            document.body.style.marginRight = 0;
        },
    },
});

export const { 
    openModal, 
    closeModal,
} = modalSlice.actions;

export default modalSlice.reducer;
