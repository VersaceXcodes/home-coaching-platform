import { configureStore } from '@reduxjs/toolkit';

// Example slice - add your own slices here
const exampleSlice = {
  name: 'example',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: any) => {
      state.value += 1;
    },
    decrement: (state: any) => {
      state.value -= 1;
    },
  },
};

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // example: exampleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
