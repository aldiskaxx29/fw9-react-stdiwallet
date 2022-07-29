import {combineReducers} from '@reduxjs/toolkit'
import amount from './amount'
import notes from './notes'
import phone from './numberPhone'
import profile from './profile'
import auth from './auth'

const reducer = combineReducers({
  amount,
  notes,
  phone,
  auth,
  profile
})

export default reducer