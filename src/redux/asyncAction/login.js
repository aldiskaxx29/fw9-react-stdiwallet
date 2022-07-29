import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const login = createAsyncThunk('profile/login', async(username,passoword)=>{
  const data = await axios.post('http://localhost:3333/profile',{username,passoword})
  return data
})