import * as ActionAddres from '../constants/Addres'


export const doAddToAddres = (data) => ({
    type: ActionAddres.ADD_TO_ADDRES,
    data,
});
export const doAddToAddresRequest = (data) => ({
    type: ActionAddres.ADD_TO_ADDRES_REQUEST,
    data,
});
export const doAddToAddresFailed = (data) => ({
    type: ActionAddres.ADD_TO_ADDRES_FAILED,
    data,
});

export const doGetAddresRequest = (payload) => ({
    type: ActionAddres.GET_ADDRES_REQUEST,
    payload,
});
export const doGetAddresSucced = (payload) => ({
    type: ActionAddres.GET_ADDRES_SUCCEED,
    payload,
});

export const doGetAddresFailed = (payload) => ({
    type: ActionAddres.GET_ADDRES_FAILED,
    payload,
});
export const doFindAddresRequest = (payload) => ({
    type: ActionAddres.FIND_ADDRES_REQUEST,
    payload,
});
export const doFindAddresSucced = (payload) => ({
    type: ActionAddres.FIND_ADDRES_SUCCEED,
    payload,
});export const doUpdateAddresRequest = (payload) => ({
    type: ActionAddres.UPDATE_ADDRES_REQUEST,
    payload,
});
export const doUpdateAddresSucced = (payload) => ({
    type: ActionAddres.UPDATE_ADDRES_SUCCEED,
    payload,

});
export const doDeleteAddresRequest = (payload) => ({
    type: ActionAddres.DELETE_ADDRES_REQUEST,
    payload,
});
export const doDeleteAddresSucced = (payload) => ({
    type: ActionAddres.DELETE_ADDRES_SUCCEED,
    payload,
});