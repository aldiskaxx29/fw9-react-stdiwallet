import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import http from '../../helpers/http';

export const showAllProfile = createAsyncThunk('admin/profile',async({pages,search})=>{
  const next = pages?pages:'1'
  const find = search?search:''
  console.log(find);
  const {data} = await http().get(`/admin/profile?page=${next}&search=${find}`)
  return data
})