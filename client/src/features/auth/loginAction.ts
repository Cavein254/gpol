import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userDetails, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(`${BASE_URL}/login`, userDetails, config);
    return response.data;
  }
);
