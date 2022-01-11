import { call,put } from "redux-saga/effects";
import { doGetMetySucced,doGetMetyFailed } from '../actions/Mety'
import apiMety from '../../api/api-mety'

function * handleGetMety(action){
    const {payload}=action;
    try {
        const result = yield call(apiMety.list,payload)
        yield put(doGetMetySucced(result.data))
    } catch (error) {
        yield put(doGetMetyFailed(error))
    }
}

export {
    handleGetMety
}