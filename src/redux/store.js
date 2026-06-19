import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './slices/resumeSlice';
import uiReducer from './slices/uiSlice';
import historyReducer from './slices/historySlice';
import { historyMiddleware } from './middleware/historyMiddleware';

export const makeStore = () => {
  return configureStore({
    reducer: {
      resume: resumeReducer,
      ui: uiReducer,
      history: historyReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['history/addToHistory'],
        },
      }).concat(historyMiddleware),
  });
};

