import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';
import apiCategory from '../../api/api-category'
import {  
    doCategorySucceed,
    doCategoryFailed,
    doCreateCategorySucceed,
    doUpdateCategorySucceed,
    doDeleteCategoryRequest,
    doDeleteCategorySucceed
} from '../actions/Category'

function* handleGetCategory(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCategory.list,payload);
        yield put(doCategorySucceed(result));
    } catch (error) {
        yield put(doCategoryFailed(error));
    }
}

function* handleCreateCategory(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCategory.createRow,payload);
        yield put(doCreateCategorySucceed(result.data));
    } catch (error) {
        yield put(doCategoryFailed(error));
    }
}

function* handleUpdateCategory(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCategory.updateRow,payload);
        const data = result.data[1][0];
        yield put(doUpdateCategorySucceed(data));
    } catch (error) {
        yield put(doCategoryFailed(error));
    }
}

function* handleDeleteCategory(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCategory.deleteRow,payload);
        yield put(doDeleteCategorySucceed({id:payload,result:result.data}));
    } catch (error) {
        yield put(doCategoryFailed(error));
    }
}

export {
    handleGetCategory,
    handleCreateCategory,
    handleUpdateCategory,
    handleDeleteCategory
};