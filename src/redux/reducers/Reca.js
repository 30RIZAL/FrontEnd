import * as ActionReca from '../constants/Reca'
import { createSelector } from 'reselect'

const INIT_STATE = {
    categories: [],
    reca: {},
    isLoading: false,
    succed: false,
    status: null,
    message: null,
    error: null
}

const recaReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionReca.SET_CURRENT_RECA: {
            return {
                ...state,
                currentReca: action.payload
            }
        }
        case ActionReca.GET_RECA_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionReca.GET_RECA_SUCCEED: {
            return {
                ...state,
                categories: action.payload,
                isLoading: false,
                error: null
            }
        }
        case ActionReca.GET_RECA_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case ActionReca.CREATE_RECA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ActionReca.CREATE_RECA_SUCCEEDED: {
            const { payload } = action;
            return {
                ...state,
                categories: [...state.categories, payload],
                succeed: true,
                isLoading: false
            };
        }
        case ActionReca.FIND_RECA: {
            const { payload } = action;
            const reca = getRecaById(state.categories, payload)
            console.log();
            return {
                ...state,
                reca,
                succeed: true
            };
        }
        case ActionReca.UPDATE_RECA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ActionReca.UPDATE_RECA_SUCCEEDED: {
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
        case ActionReca.DELETE_RECA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ActionReca.DELETE_RECA_SUCCEEDED: {
            const { payload } = action;
            const categories = state.categories.filter(reca => reca.reca_name !== payload.id)
            return {
                ...state,
                categories,
                status: 200,
                succeed: true
            };
        }
        default:
            return state;
    }

}

const getRecaById = (stateCategories, id) => {
    const result = stateCategories.filter(v => v.reca_name === id);
    return result[0];
}

export default recaReducer