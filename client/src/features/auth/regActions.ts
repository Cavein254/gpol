import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userDetails, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await axios.post(
      `${BASE_URL}/register`,
      userDetails,
      config
    );
    return response.data;
  }
);
