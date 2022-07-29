import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjcsImlhdCI6MTY1OTA4MjEyN30.Hn5Jw0VmRHbsFOkV5Q31vJAePai1tqgXLbBP1MjnPYc'
}

export const auth = createSlice({
  name: 'token',
  initialState,
  reducers: {
    costumToken: (state,action)=>{
      state.token = action.payload
    },
    resetToken: (state)=>{
      state.token = '-'
    }
  }
})

export const {costumToken,resetToken} = auth.actions

export default auth.reducer