import * as ActionReto from '../constants/Reto';

export const doAddRetoSucced = (data) => ({
  type: ActionReto.ADD_RETO_SUCCEED,
  data,
});
export const doAddRetoRequest = (data) => ({
  type: ActionReto.ADD_RETO_REQUEST,
  data,
});
export const doAddRetoFailed = (data) => ({
  type: ActionReto.ADD_RETO_FAILED,
  data,
});

export const doGetRetoRequest = (payload) => ({
  type: ActionReto.GET_RETO_REQUEST,
  payload,
});
export const doGetRetoSucced = (payload) => ({
  type: ActionReto.GET_RETO_SUCCEED,
  payload,
});

export const doGetRetoFailed = (payload) => ({
  type: ActionReto.GET_RETO_FAILED,
  payload,
});
export const doFindRetoRequest = (payload) => ({
  type: ActionReto.FIND_RETO_REQUEST,
  payload,
});
export const doFindRetoSucced = (payload) => ({
  type: ActionReto.FIND_RETO_SUCCEED,
  payload,
});
export const doUpdateRetoRequest = (payload) => ({
  type: ActionReto.UPDATE_RETO_REQUEST,
  payload,
});
export const doUpdateRetoSucced = (payload) => ({
  type: ActionReto.UPDATE_RETO_SUCCEED,
  payload,
});
export const doDeleteRetoRequest = (payload) => ({
  type: ActionReto.DELETE_RETO_REQUEST,
  payload,
});
export const doDeleteRetoSucced = (payload) => ({
  type: ActionReto.DELETE_RETO_SUCCEED,
  payload,
});
