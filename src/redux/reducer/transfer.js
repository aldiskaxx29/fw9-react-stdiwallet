import { createSlice } from '@reduxjs/toolkit'
import { transfer } from '../asyncAction/transfer'

const initialState = {
  value: 0,
  receiver:'',
  name:'',
  phone: '',
  photo:'',
  date:'',
  errormsg:'',
  successmsg:'',
  notes: '-',
}

export const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    costumAmount: (state,action)=>{
      state.value = parseInt(action.payload, 10)
    },
    resetAmount: (state)=>{
      state.value = 0
    },
    costumNotes: (state,action)=>{
      state.value = action.payload
    },
    resetNotes: (state)=>{
      state.value = '-'
    },
    costumNameTransfer: (state,action)=>{
      state.name = action.payload
    },
    costumPhoneTransfer: (state,action)=>{
      state.phone = action.payload
    },
    costumPhotoTransfer: (state,action)=>{
      state.photo = action.payload
    },
    costumDateTransfer:(state,action)=>{
      state.date = action.payload
    },
    costumReceiver:(state,action)=>{
      state.receiver = action.payload
    },
    resetTransfer: (state)=>{
      state.name = ''
      state.phone = ''
      state.photo = ''
      state.data = ''
    }
  },
  extraReducers: (build)=>{
    build.addCase(transfer.pending,(state)=>{
      state.errormsg=null
      state.successmsg=null
    })
    build.addCase(transfer.fulfilled,(state,action)=>{
      state.errormsg=action.payload?.errormsg
      state.successmsg=action.payload?.successmsg
    })
  }
})

export const {costumAmount,costumNotes,resetNotes,resetAmount,costumPhotoTransfer,costumNameTransfer,costumPhoneTransfer,costumDateTransfer,costumReceiver,resetTransfer} = transferSlice.actions

export default transferSlice.reducer