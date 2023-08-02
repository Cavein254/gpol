import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export function apiRegisterUser () {
  return async function apiRegisterUserThunk()
}

export const apiRegSlice = createSlice({
  name: 'apiReg',
  initialState,
  reducers: {
    apiReg: (state) => {
    },
  },
});

export const { apiReg } = apiRegSlice.actions;

export default apiRegSlice.reducer;
