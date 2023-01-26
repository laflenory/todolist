import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        title: '',
        modalTitle: '',
        description: '',
        modalDescription: '',
        done: false,
    },
    reducers: {
        changeTitle(state, { payload }) {
            const { title, isModal } = payload;

            if (isModal) {
                state.modalTitle = title;
            } else {
                state.title = title;
            }
        },
        changeDescrption(state, { payload }) {
            const { description, isModal } = payload;

            if (isModal) {
                state.modalDescription = description;
            } else {
                state.description = description;
            }
        },
        clearForm(state, { payload }) {
            const { isModal } = payload;

            if (isModal) {
                state.modalTitle = '';
                state.modalDescription = '';
            } else {
                state.title = '';
                state.description = '';
            }
        },
    },
});

export const { 
    changeTitle, 
    changeDescrption, 
    clearForm,
} = formSlice.actions;

export default formSlice.reducer;
