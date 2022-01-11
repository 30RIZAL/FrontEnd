import * as ActionType from '../constants/Category';
import { createSelector } from 'reselect';

const INIT_STATE = {
    categories: [],
    category: {},
    isLoading: false,
    succeed: false,
    status : null,
    message : null,
    error: null
}

const categoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.SET_CURRENT_CATEGORY: {
            return {
                ...state,
                currentCategory: action.payload
            }
        }
        case ActionType.GET_CATEGORY_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_CATEGORY_SUCCEED: {
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
                error: null
            }
        }
        case ActionType.GET_CATEGORY_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case ActionType.CREATE_CATEGORY_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ActionType.CREATE_CATEGORY_SUCCEEDED: {
            const {payload} = action;
            return {
                ...state,
                categories: [...state.categories, payload],
                succeed: true,
                isLoading: false
            };
        }
        case ActionType.FIND_CATEGORY: {
            const { payload } = action;
            const category = getCategoryById(state.categories, payload)
            console.log();
            return {
                ...state,
                category,
                succeed: true
            };
        }
        case ActionType.UPDATE_CATEGORY_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ActionType.UPDATE_CATEGORY_SUCCEEDED: {
            const { payload } = action;
            const categories = state.categories.map(reca => {
                if (reca.reca_name === payload.reca_name) {
                    reca.reca_desc = payload.reca_desc;
                    return reca;
                }
                return reca;
            });
            return {
                ...state,
                categories,
                succeed: true
            };
        }
        case ActionType.DELETE_CATEGORY_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ActionType.DELETE_CATEGORY_SUCCEEDED: {
            const { payload } = action;
            const categories = state.categories.filter(reca => reca.reca_name !== payload.id)
            return {
                ...state,
                categories,
                status : 200,
                succeed: true
            };
        }
        default:
            return state;
    }

}

const getCategoryById = (stateCategories, id) => {
    const result = stateCategories.filter(v => v.reca_name === id);
    return result[0];
}

export default categoryReducer