import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const showAllProfile = createAsyncThunk('admin/profile',async(token)=>{
  const {data} = await axios.get('http://localhost:3333/admin/profile')
  return data
})