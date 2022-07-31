import {combineReducers} from '@reduxjs/toolkit'
import amount from './amount'
import notes from './notes'
import phone from './numberPhone'
import profile from './profile'
import auth from './auth'
import history from './history'
import getAllProfile from './getAllProfile'
import transfer from './transfer'

const reducer = combineReducers({
  amount,
  notes,
  phone,
  auth,
  profile,
  history,
  getAllProfile,
  transfer
})

export default reducer