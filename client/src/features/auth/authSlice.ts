import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

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
