import { createSlice } from '@reduxjs/toolkit';
import { RegistrationDetail } from '../../types';

const initialState: RegistrationDetail = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  idNo: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registration: (state) => {
      console.log(state);
    },
  },
});

export const { registration } = registerSlice.actions;

export default registerSlice.reducer;
