import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/combiner'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
