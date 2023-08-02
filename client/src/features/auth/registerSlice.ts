import { createSlice } from '@reduxjs/toolkit';
import { RegistrationDetail } from '../../types';
import { apiRegisterUser } from '../../utils/utils';

const initialState: RegistrationDetail = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  idNo: '',
};

export const registerUser = ('user/register', async () => {});

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registration: (state) => {
      console.log(apiRegisterUser());
    },
  },
});

export const { registration } = registerSlice.actions;

export default registerSlice.reducer;
