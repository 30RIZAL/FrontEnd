import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiProduct from '../../api/api-product'
import {  
    doGetProductSucceed,
    doAddProductSucceed,doProductFailed
} from '../actions/Product';

function* handleGetProduct(action) {
    const {payload} = action;
    try {
        const result = yield call(apiProduct.findAll,payload);
        yield put(doGetProductSucceed(result.data));
    } catch (error) {
        yield put(doProductFailed(error));
    }
}

function* handleAddProduct(action) {
    const {payload} = action;
    try {
        const result = yield call(apiProduct.addProduct,payload);
        yield put(doAddProductSucceed(result.data[0]));
    } catch (error) {
        yield put(doProductFailed(error));
    }
}

export  {
    handleAddProduct,
    handleGetProduct
}