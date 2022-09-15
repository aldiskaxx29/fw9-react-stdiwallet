import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
import http from '../../helpers/http';

export const transfer = createAsyncThunk(
  '/trans/transfer',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      console.log(send);
      const {data} = await http(token).post('/transfer', send);
      console.log(data);
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      console.log(e.response.data.massage);
      results.error = e.response.data.massage;
      return results;
    }
  },
);
