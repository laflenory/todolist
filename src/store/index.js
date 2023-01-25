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

import todolistReducer from './todolistSlice';
import modalReducer from './modalSlice';

export default configureStore({
    reducer: persistReducer({ key: 'application', storage, blacklist: ['modal'] }, combineReducers({ todolist: todolistReducer, modal: modalReducer })),
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        });
    },
});
