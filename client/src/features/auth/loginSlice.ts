import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from './loginAction';

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

const regSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction) => {
        state.status = 'succeeded';
        state.entities.push(action.payload);
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default loginUser.reducer;
