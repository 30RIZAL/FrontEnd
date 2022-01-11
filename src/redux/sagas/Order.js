import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import apiOrder from '../../api/api-Order';
import {
  doAddOrderSuccedd,
  doGetOrderFailed,
  doCancelOrderSuccedd,
  doGetOrderSuccedd,
} from '../actions/Order';

function* handleAddOrder(action) {
  const { payload } = action;
  try {
    const result = yield call(apiOrder.addOrder, payload);
    yield put(doAddOrderSuccedd(result.data));
  } catch (error) {
    yield put(doGetOrderFailed(error));
  }
}
function* handleCancelOrder(action) {
  const { payload } = action;
  try {
    const result = yield call(apiOrder.cancel, payload);
    yield put(doCancelOrderSuccedd(result.data));
  } catch (error) {
    yield put(doGetOrderFailed(error));
  }
}
function* handleGetOrder(action) {
  const { payload } = action;
  try {
    const result = yield call(apiOrder.findAll, payload);
    yield put(doGetOrderSuccedd(result.data));
  } catch (error) {
    yield put(doGetOrderFailed(error));
  }
}
export { handleGetOrder, handleAddOrder, handleCancelOrder };
