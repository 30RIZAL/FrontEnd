import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';
import apiCart from '../../api/api-cart'
import {
doAddToCart,doFindCartSucced,doGetCartFailed,
doAddToCartFailed,doGetCartSucced,doDeleteCartSucced,doUpdateCartSucced
} from '../actions/Cart'


function* handleAddCart(action) {
    const {data} = action;
    try {
        const result = yield call(apiCart.addCart,data);
        yield put(doAddToCart(result));
    } catch (error) {
        yield put(doAddToCartFailed(error));
    }
}

function* handleGetCart(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCart.findRow,payload);
        yield put(doGetCartSucced(result.data));
    } catch (error) {
        yield put(doGetCartFailed(error));
    }
}

function* handleFindCart(action){
    const{payload}= action;
    try {
        const result = yield call(apiCart.findAll,payload)
        yield put(doFindCartSucced(result.data))
    } catch (error) {
        yield put(doAddToCartFailed(error))
    }
}

function* handleDeleteCart(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCart.deleteRow,payload);
        yield put(doDeleteCartSucced({id:payload,result:result.data}));
    } catch (error) {
        yield put(doAddToCartFailed(error));
    }
}

function* handleUpdateCart(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCart.updateRow,payload);
        const data = result.data;
        yield put(doUpdateCartSucced(data));
    } catch (error) {
        yield put(doAddToCartFailed(error));
    }
}

export{
    handleAddCart,
    handleDeleteCart,
    handleFindCart,
    handleGetCart,
    handleUpdateCart
}