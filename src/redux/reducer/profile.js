import { createSlice } from '@reduxjs/toolkit';
import { showProfile } from '../asyncAction/profile';

const initialState = {
  value:{}
}

export const profile = createSlice({
  name:'profile',
  initialState,
  reducers:{},
  extraReducers:(build)=>{
    build.addCase(showProfile.fulfilled,(state,action)=>{
      state.value=action.payload
    })
  }
})

export {showProfile}
export default profile.reducer