import { call,put } from "redux-saga/effects";
import apiCategory from "../../api/api-category";
import {
    doRecaSucceed,
    doRecaFailed,
    doCreateRecaSucceed,
    doUpdateRecaSucceed,
    doDeleteRecaSucceed
} from '../actions/Reca'

function* handleGetReca(action){
    const {payload}= action;
    try {
        const result = yield call(apiCategory.list,payload)
        yield put(doRecaSucceed(result))
    } catch (error) {
        yield put(doRecaFailed(error))
    }
}

function* handleCreatereca(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCategory.createRow,payload);
        yield put(doCreateRecaSucceed(result.data));
    } catch (error) {
        yield put(doRecaFailed(error));
    }
}

function* handleUpdateReca(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCategory.updateRow,payload);
        const data = result.data[1][0];
        yield put(doUpdateRecaSucceed(data));
    } catch (error) {
        yield put(doRecaFailed(error));
    }
}

function* handleDeleteReca(action) {
    const {payload} = action;
    try {
        const result = yield call(apiCategory.deleteRow,payload);
        yield put(doDeleteRecaSucceed({id:payload,result:result.data}));
    } catch (error) {
        yield put(doRecaFailed(error));
    }
}

export {
    handleGetReca,
    handleCreatereca,
    handleUpdateReca,
    handleDeleteReca
};
