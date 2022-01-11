import { call,put } from "redux-saga/effects";
import apiAddres from '../../api/api-addres'
import {
    doAddToAddres,doGetAddresSucced,doDeleteAddresSucced,doFindAddresSucced,doAddToAddresFailed,doUpdateAddresSucced
} from '../actions/Addres'


function * handleGetAddres(action){
    const {payload}=action;
    try {
        const result = yield call(apiAddres.list,payload)
        yield put(doGetAddresSucced(result.data))
    } catch (error) {
        yield put(doAddToAddresFailed(error))
    }
}

function* handleAddAddres(action){
    const{payload}= action;
    try {
        const result = yield call(apiAddres.createRow,payload)
        yield put(doAddToAddres(result.data))
    } catch (error) {
        yield put(doAddToAddresFailed(error))
    }
}
function* handleFindAddres(action){
    const{payload}= action;
    try {
        const result = yield call(apiAddres.findRow,payload)
        yield put(doFindAddresSucced(result.data))
    } catch (error) {
        yield put(doAddToAddresFailed(error))
    }
}


function* handleUpdateAddres(action) {
    const {payload} = action;
    try {
        const result = yield call(apiAddres.updateRow,payload);
        const data = result.data;
        yield put(doUpdateAddresSucced(data));
    } catch (error) {
        yield put(doAddToAddresFailed(error));
    }
}

function* handleDeleteAddres(action) {
    const {payload} = action;
    try {
        const result = yield call(apiAddres.deleteRow,payload);
        yield put(doDeleteAddresSucced({id:payload,result:result.data}));
    } catch (error) {
        yield put(doAddToAddresFailed(error));
    }
}

export {
    handleAddAddres,
    handleGetAddres,
    handleDeleteAddres,
    handleUpdateAddres,
    handleFindAddres
}