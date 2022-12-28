import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/combiner'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './sagas/rootSaga'
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, thunk),
})

sagaMiddleware.run(rootSaga)

export default store
