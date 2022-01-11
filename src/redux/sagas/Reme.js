import { call,put } from "redux-saga/effects";
import apiReme from '../../api/api-reme'
import {
    doGetRemeSucceed,
    doAddRemeSucceed,
    doRemeFailed,
    doDeleteRemeSucceed,
    doUpdateRemeSucceed,
    doFindRemeSucceed,
    doSearchRemeSucceed
} from '../actions/Reme'


function * handleGetReme(action){
    const {payload}=action;
    try {
        const result = yield call(apiReme.list,payload)
        yield put(doGetRemeSucceed(result.data))
    } catch (error) {
        yield put(doRemeFailed(error))
    }
}

function * handleSearchReme(action){
    const {payload}=action;
    try {
        const result = yield call(apiReme.search,payload)
        yield put(doSearchRemeSucceed(result.data))
    } catch (error) {
        yield put(doRemeFailed(error))
    }
}

function* handleAddReme(action){
    const{payload}= action;
    try {
        const result = yield call(apiReme.createRow,payload)
        yield put(doAddRemeSucceed(result.data))
    } catch (error) {
        yield put(doRemeFailed(error))
    }
}
function* handleFindReme(action){
    const{payload}= action;
    try {
        const result = yield call(apiReme.findRow,payload)
        yield put(doFindRemeSucceed(result.data))
    } catch (error) {
        yield put(doRemeFailed(error))
    }
}


function* handleUpdateReme(action) {
    const {payload} = action;
    try {
        const result = yield call(apiReme.updateRow,payload);
        const data = result.data;
        yield put(doUpdateRemeSucceed(data));
    } catch (error) {
        yield put(doRemeFailed(error));
    }
}

function* handleDeleteReme(action) {
    const {payload} = action;
    try {
        const result = yield call(apiReme.deleteRow,payload);
        yield put(doDeleteRemeSucceed({id:payload,result:result.data}));
    } catch (error) {
        yield put(doRemeFailed(error));
    }
}

export {
    handleAddReme,
    handleGetReme,
    handleDeleteReme,
    handleUpdateReme,
    handleFindReme,
    handleSearchReme
}