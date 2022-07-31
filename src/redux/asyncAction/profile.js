import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const showProfile = createAsyncThunk('profile/showProfile',async(token)=>{
  const auth = token
  const {data} = await axios.get('http://localhost:3333/profile',{headers: { Authorization:'Bearer ' + auth}})
  return data
})