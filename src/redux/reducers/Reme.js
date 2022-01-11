import * as ActionReme from '../constants/Reme';
import { createSelector } from 'reselect';

const INIT_STATE = {
  reme: [],
  find: [],
  reme_id: '',
  reme_name: '',
  reme_desc: '',
  reme_price: '',
  reme_url_image: '',
  reme_mety_name: '',
  reme_reto_id: '',
  isLoading: false,
  succed: false,
  status: null,
  message: null,
  error: null,
  redirect: false,
};

const remeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    
    case ActionReme.GET_REME_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionReme.GET_REME_SUCCEED: {
      return {
        ...state,
        reme: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case ActionReme.GET_REME_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ActionReme.ADD_REME_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionReme.ADD_REME_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        reme_id: payload.reme_id,
        reme_name: payload.reme_name,
        reme_desc: payload.reme_desc,
        reme_price: payload.reme_price,
        reme_url_image: payload.reme_url_image,
        succeed: true,
        isLoading: false,

        redirect: true,
      };
    }

    case ActionReme.FIND_REME_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionReme.FIND_REME_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        find: payload,
      };
    }
    case ActionReme.UPDATE_REME_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionReme.UPDATE_REME_SUCCEEDED: {
      const { payload } = action;
      return {
        ...state,
        reme: payload,
        succeed: true,
        isLoading: false,

        redirect: true,
      };
    }
    case ActionReme.DELETE_REME_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionReme.DELETE_REME_SUCCEEDED: {
      const { payload } = action;
      const reme = state.reme.filter((reme) => reme.reme_id !== payload.id);
      return {
        ...state,
        reme,
        status: 200,
        succeed: true,
      };
    }
    case ActionReme.SEARCH_REME_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionReme.SEARCH_REME_SUCCEED: {
      return {
        ...state,
        reme: action.payload,
        isLoading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};

const getRemeById = (statereme, id) => {
  const result = statereme.filter((v) => v.reme_name === id);
  return result[0];
};

export default remeReducer;
