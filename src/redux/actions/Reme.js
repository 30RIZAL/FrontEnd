import * as ActionReme from '../constants/Reme'


export const doGetRemeRequest = (payload) => ({
    type: ActionReme.GET_REME_REQUEST,
    payload,
});

export const doGetRemeSucceed = (payload) => ({
    type: ActionReme.GET_REME_SUCCEED,
    payload,
});

export const doRemeFailed = (payload) => ({
    type: ActionReme.GET_REME_FAILED ,
    payload,
});

export const doAddRemeRequest = (payload) => ({
    type: ActionReme.ADD_REME_REQUEST,
    payload,
});

export const doAddRemeSucceed = (payload) => ({
    type: ActionReme.ADD_REME_SUCCEED ,
    payload,
});

export const doAddRemeFailed = (payload) => ({
    type: ActionReme.ADD_REME_FAILED ,
    payload,
});

export const doUpdateRemeRequest =(payload)=>({
    type:ActionReme.UPDATE_REME_REQUEST,
    payload,
})
export const doUpdateRemeSucceed =(payload)=>({
    type:ActionReme.UPDATE_REME_SUCCEEDED,
    payload,
})

export const doDeleteRemeRequest =(payload)=>({
    type:ActionReme.DELETE_REME_REQUEST,
    payload,
})
export const doDeleteRemeSucceed =(payload)=>({
    type:ActionReme.DELETE_REME_SUCCEEDED,
    payload,
})

export const doFindRemeRequest = (payload) => ({
    type: ActionReme.FIND_REME_REQUEST,
    payload,
});

export const doFindRemeSucceed = (payload) => ({
    type: ActionReme.FIND_REME_SUCCEED ,
    payload,
});
export const doSearchRemeRequest = (payload) => ({
    type: ActionReme.SEARCH_REME_REQUEST,
    payload,
});
export const doSearchRemeSucceed = (payload) => ({
    type: ActionReme.SEARCH_REME_SUCCEED ,
    payload,
});