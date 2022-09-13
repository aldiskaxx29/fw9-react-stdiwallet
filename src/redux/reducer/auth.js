import { createSlice } from '@reduxjs/toolkit'
import {createpin, login, register} from '../asyncAction/auth'

const initialState = {
  id: '',
  token:'',
  email:'',
  errormsg:'',
  successmsg:''
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState
    },
    costumeEmail:(state,action)=>{
      state.email=action.payload
    },
    resetEmail:(state,action)=>{
      state.email=''
    },
    resetMsg:(state)=>{
      state.errormsg=''
      state.successmsg=''
    }
  },
  extraReducers: (build) => {
    build.addCase(login.pending,(state)=>{
      state.errormsg= null;
      state.successmsg= null;
    })
    build.addCase(login.fulfilled,(state,action)=>{
      const token = action.payload?.token
      const id = action.payload?.id
      if(token){
        state.token=token
        state.id=id
      }else{
        state.errormsg = action.payload?.errormsg
        state.successmsg = action.payload?.successmsg
      }
    })
    build.addCase(register.pending,(state)=>{
      state.errormsg=null
      state.successmsg=null
    })
    build.addCase(register.fulfilled,(state,action)=>{
      state.errormsg = action.payload?.errormsg
      state.successmsg = action.payload?.successmsg
    })
    build.addCase(createpin.pending,(state)=>{
      state.errormsg=null
      state.successmsg=null
    })
    build.addCase(createpin.fulfilled,(state,action)=>{
      state.errormsg = action.payload?.errormsg
      state.successmsg = action.payload?.successmsg
    })
  }
})

export {login}
export const {logout} = auth.actions
export const {costumeEmail,resetEmail,resetMsg} = auth.actions
export default auth.reducer