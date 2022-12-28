import { all } from 'redux-saga/effects'
import { watchFetch } from './postSaga'

export function* rootSaga() {
  yield all([watchFetch()])
}
