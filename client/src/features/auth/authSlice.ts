import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    register: () => {},
  },
  extraReducers(builder) {},
});

export const { register } = authSlice.actions;

export default authSlice.reducer;
