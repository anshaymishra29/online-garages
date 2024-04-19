import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './slice/authenticationSlice';

const store = configureStore({
    reducer: {
        authenticate: authenticationReducer,
    },
});

export default store;
