import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../types/action-types'
import { setProducts } from '../actions/productActions'
import fakeStoreApi from '../../apis/fakeStoreApi'

//worker saga
export async function* fetchProducts() {
  try {
    const { data } = await fakeStoreApi.get('/products')
    yield call(data)
    yield put(setProducts(data))
  } catch (error) {
    console.log(error)
  }
}

//watcher saga
export function* watchFetch() {
  yield takeEvery(ActionTypes.FETCH_PRODUCTS, fetchProducts)
}
