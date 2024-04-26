import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import propertyListReducer from './properties';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    propertyList: propertyListReducer
  },
})