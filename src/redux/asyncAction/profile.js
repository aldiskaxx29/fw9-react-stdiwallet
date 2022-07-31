import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'qs'
import http from '../../helpers/http';

export const showProfile = createAsyncThunk('profile/showProfile',async(token)=>{
  const auth = token
  const {data} = await axios.get('http://localhost:3333/profile',{headers: { Authorization:'Bearer ' + auth}})
  return data
})

export const editprofile = createAsyncThunk('profile/editprofile',async(request)=>{
  const results = {}
  try{
    const send = qs.stringify(request)
    const {data} = await http().patch('/profile',send,{headers:{'Content-Type': 'multipart/form-data' }})
    results.successmsg=data.massage
    return results
  }
  catch(e){
    results.errormsg = e.response.data.massage
    return results
  }
})