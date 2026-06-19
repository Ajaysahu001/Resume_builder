import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTemplate: 'modern',
  theme: 'light',
  loading: false,
  sidebarOpen: true,
  previewMode: 'split', // 'split', 'form', 'preview'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setPreviewMode: (state, action) => {
      state.previewMode = action.payload;
    },
  },
});

export const {
  setTemplate,
  toggleTheme,
  setTheme,
  setLoading,
  toggleSidebar,
  setPreviewMode,
} = uiSlice.actions;

export default uiSlice.reducer;

