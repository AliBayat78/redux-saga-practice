import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../types/action-types'
import { setProducts } from '../actions/productActions'
import fakeStoreApi from '../../apis/fakeStoreApi'

const getProducts = async () => {
  return await fakeStoreApi.get('/products')
}

//worker saga
export function* fetchProducts() {
  try {
    const { data } = yield call(getProducts)
    yield put(setProducts(data))
  } catch (error) {
    console.log(error)
  }
}

//watcher saga
export function* watchFetch() {
  yield takeEvery(ActionTypes.FETCH_PRODUCTS, fetchProducts)
}
