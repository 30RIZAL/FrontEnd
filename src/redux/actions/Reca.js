import * as ActionReca from '../constants/Reca'

export const doGetRecaRequest = (payload) => ({
    type: ActionReca.GET_RECA_REQUEST,
    payload,
});


export const doSetCurrentReca =(payload)=>({
    type:ActionReca.SET_CURRENT_RECA,
    payload,
})

export const doRecaStarted =(payload)=>({
    type:ActionReca.GET_RECA_REQUEST,
    payload,
})

export const doRecaSucceed =(payload)=>({
    type:ActionReca.GET_RECA_SUCCEED,
    payload,
})

export const doRecaFailed =(payload)=>({
    type:ActionReca.GET_RECA_FAILED,
    payload,
})

export const doCreateRecaStarted =(payload)=>({
    type:ActionReca.CREATE_RECA_REQUEST,
    payload,
})

export const doCreateRecaSucceed =(payload)=>({
    type:ActionReca.CREATE_RECA_SUCCEEDED,
    payload,
})

export const doFindReca =(payload)=>({
    type:ActionReca.FIND_RECA,
    payload,
})

export const doUpdateRecaRequest =(payload)=>({
    type:ActionReca.UPDATE_RECA_REQUEST,
    payload,
})
export const doUpdateRecaSucceed =(payload)=>({
    type:ActionReca.UPDATE_RECA_SUCCEEDED,
    payload,
})

export const doDeleteRecaRequest =(payload)=>({
    type:ActionReca.DELETE_RECA_REQUEST,
    payload,
})

export const doDeleteRecaSucceed =(payload)=>({
    type:ActionReca.UPDATE_RECA_SUCCEEDED,
    payload,
})

