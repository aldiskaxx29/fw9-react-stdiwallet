import { createSlice } from '@reduxjs/toolkit'

const intialState = {
  amount: 0
}

export const amountSlice = createSlice({
  nama: 'amount',
  intialState,
  reducers: {
    costumAmount: (state,action)=>{
      state.amount = parseInt(action.payload, 10)
    }
  }
})

export const {costumAmount} = amountSlice.actions

export default amountSlice.reducer