import * as ActionType from '../constants/Product';

const INIT_STATE = {
    products: [],
    isLoading: false,
    status : false,
    error: null,
    redirect : false
}

const productReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_PRODUCT_FAILED: {
            return {
                isLoading: false,
                error: action.payload.error,
            }
        }
        case ActionType.GET_PRODUCT_SUCCEED: {
            return applyGetProductSucceed(state,action)
        }
        case ActionType.ADD_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.ADD_PRODUCT_SUCCEED: {
            return applyAddProductSucceed(state,action)
        }
        default:
            return state;
    }

}

const applyGetProductSucceed = (state, action) => {
    return {
        ...state,
        products: action.payload,
        isLoading: false
    }
}

const applyAddProductSucceed = (state, action) => {
    const {payload} = action;
    return {
        ...state,
        products: [...state.products,payload],
        isLoading: false,
        redirect : true
    }
}

export default productReducer