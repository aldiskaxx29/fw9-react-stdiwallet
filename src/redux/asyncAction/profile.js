import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
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

export const addNumber = createAsyncThunk(
  '/profile/AddNumber',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).patch('/number', send);
      results.data = data.result;
      results.massage = data.massage;
      return results;
    } catch (e) {
      results.error=e.response.data.result
      return e;
    }
  },
);