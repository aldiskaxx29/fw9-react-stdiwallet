import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  phone: '',
  photo:''
}

export const transferSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    costumNameTransfer: (state,action)=>{
      state.name = action.payload
    },
    costumPhoneTransfer: (state,action)=>{
      state.phone = action.payload
    },
    costumPhotoTransfer: (state,action)=>{
      state.photo = action.payload
    },
    resetTransfer: (state)=>{
      state.name = ''
      state.phone = ''
      state.photo = ''
    }
  }
})

export const {costumPhotoTransfer,costumNameTransfer,costumPhoneTransfer,resetTransfer} = transferSlice.actions

export default transferSlice.reducer