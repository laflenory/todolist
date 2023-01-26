import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import formReducer from './formSlice';
import todolistReducer from './todolistSlice';
import modalReducer from './modalSlice';

export default configureStore({
    reducer: persistReducer(
        { 
            key: 'application', 
            blacklist: [
                'form', 
                'modal',
            ],
            storage,
        },
        combineReducers({ 
            todolist: todolistReducer, 
            modal: modalReducer, 
            form: formReducer,
        },
    )),
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH, 
                    REHYDRATE, 
                    PAUSE, 
                    PERSIST, 
                    PURGE, 
                    REGISTER,
                ],
            },
        });
    },
});
