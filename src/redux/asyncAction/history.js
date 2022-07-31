import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const showHistory = createAsyncThunk('history/showHistory',async(token)=>{
  const {data} = await axios.get('http://localhost:3333/historyTransaction',{headers: { Authorization:'Bearer ' + token}})
  return data
})