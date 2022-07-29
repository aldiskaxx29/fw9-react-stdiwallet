import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const showProfile = createAsyncThunk('profile/showProfile',async()=>{
  const {data} = await axios.get('http://localhost:3333/profile')
  return data
})