import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
import http from '../../helpers/http';

export const changePassword = createAsyncThunk(
  '/profile/changePass',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/changePassword', send);
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

export const changePin = createAsyncThunk(
  '/user/changePin',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/changePin', send);
      console.log(data);
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      results.error = e.response.data.massage;
      console.log(e.response.data.massage);
      return results;
    }
  },
);