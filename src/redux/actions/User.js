import * as ActionUser from '../constants/User'

export const doSignupRequest = (payload) => ({
    type: ActionUser.ADD_SIGNUP_REQUEST,
    payload,
});

export const doSignupSucceed = (payload) => ({
    type: ActionUser.ADD_SIGNUP_SUCCEED,
    payload,
});

export const doSignupFailed = (payload) => ({
    type: ActionUser.SIGNUP_FAILED,
    payload,
});

export const doSigninRequest = (payload) => ({
    type: ActionUser.GET_SIGNIN_REQUEST,
    payload,
});

export const doSigninSucceed = (payload) => ({
    type: ActionUser.GET_SIGNIN_SUCCEED,
    payload,
});

export const doSigninFailed = (payload) => ({
    type: ActionUser.SIGNIN_FAILED,
    payload,
});


export const doSignoutRequest = (payload) => ({
    type: ActionUser.GET_SIGNOUT_REQUEST,
    payload,
});

export const doSignoutSucceed = (payload) => ({
    type: ActionUser.GET_SIGNOUT_SUCCEED,
    payload,
});
export const doUserRequest = (payload) => ({
    type: ActionUser.GET_USER_REQUEST,
    payload,
});

export const doUserSucceed = (payload) => ({
    type: ActionUser.GET_USER_SUCCEED,
    payload,
});