import {combineReducers} from '@reduxjs/toolkit'
import amount from './amount'
import notes from './notes'
import phone from './numberPhone'

const reducer = combineReducers({
  amount,
  notes,
  phone
})

export default reducer