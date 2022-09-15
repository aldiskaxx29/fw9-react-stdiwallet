import { createSlice } from '@reduxjs/toolkit';
import { changePassword, changePin } from '../asyncAction/changePassword';
import { addNumber, editprofile, showProfile } from '../asyncAction/profile';

const initialState = {
  value:'',
  balance:{},
  email:'',
  data:{},
  successmsg:'',
  errormsg: '',
  oldPin: ''
}

export const profile = createSlice({
  name:'profile',
  initialState,
  reducers:{
    balance:(state,action)=>{
      state.balance=action.payload
    },
    loginemail:(state,action)=>{
      state.email=action.payload
    },
    resetMsgProf:(state)=>{
      state.successmsg=''
      state.errormsg=''
    },
    getOldPin:(state,action) =>{
      state.oldPin=action.payload
    }
  },
  extraReducers:(build)=>{
    build.addCase(showProfile.pending,(state)=>{
      state.value=null
    })
    build.addCase(showProfile.fulfilled,(state,action)=>{
      state.value=action.payload?.data
    })
    build.addCase(editprofile.pending,(state)=>{
      state.data=null
      state.successmsg=null
    })
    build.addCase(editprofile.fulfilled,(state,action)=>{
      state.data=action.payload
      state.successmsg=action.payload?.successmsg
    })
    build.addCase(changePassword.pending,(state)=>{
      state.errormsg=null
      state.successmsg=null
    })
    build.addCase(changePassword.fulfilled,(state,action)=>{
      state.errormsg=action.payload?.error
      state.successmsg=action.payload?.massage
    })
    build.addCase(addNumber.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(addNumber.fulfilled, (state, action) => {
      const successmsg = action.payload?.massage;
      state.errormsg = action.payload?.error;
      if (successmsg) {
        state.successmsg = successmsg;
      }
    });
    build.addCase(changePin.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(changePin.fulfilled, (state, action) => {
      state.successmsg = action.payload?.massage;
      state.errormsg = action.payload?.error;
    });
  }
})

export {showProfile,editprofile}
export const {getOldPin,resetMsgProf,balance,loginemail} = profile.actions
export default profile.reducer