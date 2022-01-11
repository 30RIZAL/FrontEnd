import * as ActionOrder from '../constants/Order'

export const doGetOrderRequest = (payload) => ({
    type: ActionOrder.GET_ORDER_REQUEST,
    payload,
});
export const doGetOrderSuccedd = (payload) => ({
    type: ActionOrder.GET_ORDER_SUCCEED,
    payload,
});
export const doGetOrderFailed = (payload) => ({
    type: ActionOrder.GET_ORDER_FAILED,
    payload,
});
export const doAddOrderRequest = (payload) => ({
    type: ActionOrder.ADD_ORDER_REQUEST,
    payload,
});
export const doAddOrderSuccedd = (payload) => ({
    type: ActionOrder.ADD_ORDER_SUCCEED,
    payload,
});
export const doAddOrderFailed = (payload) => ({
    type: ActionOrder.ADD_ORDER_FAILED,
    payload,
});


export const doCancelOrderRequest = (payload) => ({
    type: ActionOrder.CANCEL_ORDER_REQUEST,
    payload,
});
export const doCancelOrderSuccedd = (payload) => ({
    type: ActionOrder.CANCEL_ORDER_SUCCEED,
    payload,
});
export const doCancelOrderFailed = (payload) => ({
    type: ActionOrder.CANCEL_ORDER_FAILED,
    payload,
});