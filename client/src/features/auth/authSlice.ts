import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser } from './authActions';
interface RegisterState {
  entities: [];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: [];
}

const initialState = {
  entities: [],
  status: 'idle',
  error: [],
} as RegisterState;

const authSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction) => {
        state.status = 'succeeded';
        state.entities.push(action.payload);
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { registration } = authSlice.actions;

export default authSlice.reducer;
