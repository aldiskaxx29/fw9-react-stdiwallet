import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const showProfile = createAsyncThunk('profile/showProfile',async(token)=>{
  const results = [];
  const {data} = await http(token).get('/profile');
  results.data = data.result;
  return results;
})

export const editprofile = createAsyncThunk('profile/editprofile',async({token,first_name,last_name,photo})=>{
  const results = {}
  try{
    const formData = new FormData()
    formData.append('photo',photo)
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    console.log(formData);
    const {data} = await http(token).patch('/profile',formData)
    results.successmsg=data.massage
    return results
  }
  catch(e){
    console.log(e);
    results.errormsg = e.response.data.massage
    return results
  }
})