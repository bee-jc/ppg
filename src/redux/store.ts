import { configureStore } from '@reduxjs/toolkit';
import showReducer from './slices/showSlice';
import episodeReducer from './slices/episodeSlice';

export const store = configureStore({
  reducer: {
    show: showReducer,
    episode: episodeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
