import * as ActionType from '../constants/Category'


export const doSetCurrentCategory = (payload) => ({
    type: ActionType.SET_CURRENT_CATEGORY,
    payload,
});

export const doCategoryStarted = (payload) => ({
    type: ActionType.GET_CATEGORY_REQUEST,
    payload,
});

export const doCategorySucceed = (payload) => ({
    type: ActionType.GET_CATEGORY_SUCCEED,
    payload,
});

export const doCategoryFailed = (payload) => ({
    type: ActionType.GET_CATEGORY_FAILED,
    payload,
});

export const doCreateCategoryStarted = (payload) => ({
    type: ActionType.CREATE_CATEGORY_REQUEST,
    payload,
});

export const doCreateCategorySucceed = (payload) => ({
    type: ActionType.CREATE_CATEGORY_SUCCEEDED,
    payload,
});

export const doFindCategory = (payload) => ({
    type: ActionType.FIND_CATEGORY,
    payload,
});

export const doUpdateCategoryRequest = (payload) => ({
    type: ActionType.UPDATE_CATEGORY_REQUEST,
    payload,
});

export const doUpdateCategorySucceed = (payload) => ({
    type: ActionType.UPDATE_CATEGORY_SUCCEEDED,
    payload,
});


export const doDeleteCategoryRequest = (payload) => ({
    type: ActionType.DELETE_CATEGORY_REQUEST,
    payload,
});

export const doDeleteCategorySucceed = (payload) => ({
    type: ActionType.DELETE_CATEGORY_SUCCEEDED,
    payload,
});