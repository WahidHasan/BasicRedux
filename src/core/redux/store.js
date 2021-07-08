import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const BasicReducer = combineReducers({
 // add reducers
})

const store = configureStore({
    BasicReducer,
})

export default store;