import {combineReducers} from '@reduxjs/toolkit'
import phone from './numberPhone'
import profile from './profile'
import auth from './auth'
import history from './history'
import getAllProfile from './getAllProfile'
import transfer from './transfer'
import addNumber from './addNumber'
import counter from './counter'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage
}

const transferPersistConfig = {
  key: 'transfer',
  storage
}

const persistanceAuthReducer = persistReducer(authPersistConfig,auth)

const persistanceTransferReducer = persistReducer(transferPersistConfig,transfer)

const reducer = combineReducers({
  phone,
  auth: persistanceAuthReducer,
  profile,
  history,
  getAllProfile,
  transfer: persistanceTransferReducer,
  addNumber,
  counter
})

export default reducer