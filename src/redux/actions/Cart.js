import * as ActionCart from '../constants/Cart'


export const doAddToCart = (data) => ({
    type: ActionCart.ADD_TO_CART,
    data,
});
export const doAddToCartRequest = (data) => ({
    type: ActionCart.ADD_TO_CART_REQUEST,
    data,
});
export const doAddToCartFailed = (data) => ({
    type: ActionCart.ADD_TO_CART_FAILED,
    data,
});

export const doGetCartRequest = (payload) => ({
    type: ActionCart.GET_CART_REQUEST,
    payload,
});
export const doGetCartSucced = (payload) => ({
    type: ActionCart.GET_CART_SUCCEED,
    payload,
});

export const doGetCartFailed = (payload) => ({
    type: ActionCart.GET_CART_FAILED,
    payload,
});
export const doFindCartRequest = (payload) => ({
    type: ActionCart.FIND_CART_REQUEST,
    payload,
});
export const doFindCartSucced = (payload) => ({
    type: ActionCart.FIND_CART_SUCCEED,
    payload,
});export const doUpdateCartRequest = (payload) => ({
    type: ActionCart.UPDATE_CART_REQUEST,
    payload,
});
export const doUpdateCartSucced = (payload) => ({
    type: ActionCart.UPDATE_CART_SUCCEED,
    payload,

});
export const doDeleteCartRequest = (payload) => ({
    type: ActionCart.DELETE_CART_REQUEST,
    payload,
});
export const doDeleteCartSucced = (payload) => ({
    type: ActionCart.DELETE_CART_SUCCEED,
    payload,
});