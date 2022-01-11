import * as ActionMety from '../constants/Mety';

export const doGetMetyRequest = (payload) => ({
    type: ActionMety.GET_METY_REQUEST,
    payload,
  });
  export const doGetMetySucced = (payload) => ({
    type: ActionMety.GET_METY_SUCCEED,
    payload,
  });
  
  export const doGetMetyFailed = (payload) => ({
    type: ActionMety.GET_METY_FAILED,
    payload,
  });