import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { currentTheme: true },
  reducers: {
    toggleTheme: state => {
      state.currentTheme = !state.currentTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

export const persistedThemeReducer = persistReducer(
  themePersistConfig,
  themeSlice.reducer
);
