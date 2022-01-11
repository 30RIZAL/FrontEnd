import { call,put } from "redux-saga/effects";
import apiReto from '../../api/api-reto'
import {
    doAddRetoSucced,
    doAddRetoFailed,
    doDeleteRetoSucced,
    doFindRetoSucced,
    doGetRetoSucced,
    doUpdateRetoSucced
} from '../actions/Reto'


function * handleGetReto(action){
    const {payload}=action;
    try {
        const result = yield call(apiReto.list,payload)
        yield put(doGetRetoSucced(result.data))
    } catch (error) {
        yield put(doAddRetoFailed(error))
    }
}

function* handleAddReto(action){
    const{payload}= action;
    try {
        const result = yield call(apiReto.createRow,payload)
        yield put(doAddRetoSucced(result.data))
    } catch (error) {
        yield put(doAddRetoFailed(error))
    }
}
function* handleFindReto(action){
    const{payload}= action;
    try {
        const result = yield call(apiReto.findRow,payload)
        yield put(doFindRetoSucced(result.data))
    } catch (error) {
        yield put(doAddRetoFailed(error))
    }
}


function* handleUpdateReto(action) {
    const {payload} = action;
    try {
        const result = yield call(apiReto.updateRow,payload);
        const data = result.data;
        yield put(doUpdateRetoSucced(data));
    } catch (error) {
        yield put(doAddRetoFailed(error));
    }
}

function* handleDeleteReto(action) {
    const {payload} = action;
    try {
        const result = yield call(apiReto.deleteRow,payload);
        yield put(doDeleteRetoSucced({id:payload,result:result.data}));
    } catch (error) {
        yield put(doAddRetoFailed(error));
    }
}

export {
    handleAddReto,
    handleGetReto,
    handleDeleteReto,
    handleUpdateReto,
    handleFindReto
}