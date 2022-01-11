import * as ActionAddres from '../constants/Addres';

const INIT_STATE = {
  addres: [],
  addr_id: '',
  addr_name: '',
  addr_detail: '',
  addr_latitude: '',
  addr_longtitude: '',
  addr_user_id: '',
  isLoading: false,
  succed: false,
  status: null,
  message: null,
  error: null,
};

const addresReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionAddres.ADD_TO_ADDRES: {
      const { payload } = action;
      return {
        ...state,
        addr_id: payload.addr_id,
        addr_name: payload.addr_name,
        addr_detail: payload.addr_detail,
        addr_latitude: payload.addr_latitude,
        addr_longtitude: payload.addr_longtitude,
        addr_user_id: payload.addr_user_id,
        succeed: true,
        isLoading: false,
      };
    }

    case ActionAddres.ADD_TO_ADDRES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionAddres.ADD_TO_ADDRES_FAILED: {
      return {
        isLoading: false,
        error: action.data.error,
      };
    }

    case ActionAddres.GET_ADDRES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionAddres.GET_ADDRES_SUCCEED: {
      const { payload } = action;

      return {
        ...state,
        addres: payload,
        isLoading: false,
        error: null,
      };
    }

    case ActionAddres.GET_ADDRES_FAILED: {
      return {
          ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    case ActionAddres.DELETE_ADDRES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionAddres.DELETE_ADDRES_SUCCEED: {
      const { payload } = action;
      const addres = state.addres.filter(
        (addres) => addres.addr_id !== payload.id
      );
      return {
        ...state,
        addres,
        status: 200,
        succeed: true,
      };
    }

    case ActionAddres.FIND_ADDRES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionAddres.FIND_ADDRES_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        addres: payload,
      };
    }
    case ActionAddres.UPDATE_ADDRES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionAddres.UPDATE_ADDRES_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        addres: payload,
        isLoading: true,
        status: 200,
        succeed: true,
      };
    }
    default:
      return state;
  }
};

export default addresReducer;
