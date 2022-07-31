import { createSlice } from '@reduxjs/toolkit';
import { showProfile } from '../asyncAction/profile';

const initialState = {
  value:{},
  balance:{}
}

export const profile = createSlice({
  name:'profile',
  initialState,
  reducers:{
    balance:(state,action)=>{
      state.balance=action.payload
    }
  },
  extraReducers:(build)=>{
    build.addCase(showProfile.fulfilled,(state,action)=>{
      state.value=action.payload
    })
  }
})

export {showProfile}
export const {balance} = profile.actions
export default profile.reducer