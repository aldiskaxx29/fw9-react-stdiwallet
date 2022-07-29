import { createSlice } from '@reduxjs/toolkit';
import { login } from '../asyncAction/login';

const initialValue = {
  user:null
}

export const profile = createSlice({
  name:'user',
  initialValue,
  reducers:{},
  extraReducers:(build)=>{
    build.addCase(login.fulfilled,(state,action)=>{
      state.user=action.payload
    })
  }
})

export {login}
export default profile.reducer