import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { BasketReducer } from './slices/basket';
import { TestReducer } from './slices/test-api';

const BasicCartReducer = combineReducers({
 basket: BasketReducer,
 test: TestReducer
})

export const store = configureStore({
   reducer: BasicCartReducer,
   devTools: true,
});

export type BasketState = ReturnType<typeof BasicCartReducer>
export type BasketDispatch = typeof store.dispatch

export default store;