import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
import http from '../../helpers/http';

export const transfer = createAsyncThunk('home/transfer', async(request)=>{
  const results = {}
  try{
    const send = qs.stringify(request)
    const {data} = await http().post('/transfer', send, {headers : { 'content-type': 'application/x-www-form-urlencoded'}})
    results.successmsg = data.massage
    console.log(data);
    return results
  }
  catch(e) {
    results.errormsg = e.response.data.massage
    return results
  }
})
