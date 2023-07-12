import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './GreetingSlice/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
