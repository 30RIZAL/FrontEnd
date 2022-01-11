import * as ActionReto from '../constants/Reto';

const INIT_STATE = {
  reto: [],
  isLoading: false,
  succed: false,
  status: null,
  message: null,
  error: null,
};

const retoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionReto.ADD_RETO_SUCCEED: {
      const { data } = action;
      return {
        ...state,
        reto: data,
        status: 200,
        succeed: true,
      };
    }

    case ActionReto.ADD_RETO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionReto.ADD_RETO_FAILED: {
      return {
        isLoading: false,
        error: action.data.error,
      };
    }

    case ActionReto.GET_RETO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionReto.GET_RETO_SUCCEED: {
      const { payload } = action;

      return {
        ...state,
        reto: payload,
        status: 200,
        succeed: true,
      };
    }

    case ActionReto.GET_RETO_FAILED: {
      return {
        isLoading: false,
        error: action.payload.error,
      };
    }

    case ActionReto.DELETE_RETO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionReto.DELETE_RETO_SUCCEED: {
      const { payload } = action;
      const reto = state.reto.filter(
        (reto) => reto !== payload.id
      );
      return {
        ...state,
        reto,
        status: 200,
        succeed: true,
      };
    }

    case ActionReto.FIND_RETO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionReto.FIND_RETO_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        reto: payload,
        status: 200,
        succeed: true,
      };
    }
    case ActionReto.UPDATE_RETO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionReto.UPDATE_RETO_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        reto: payload,
        isLoading: true,
        status: 200,
        succeed: true,
      };
    }
    default:
      return state;
  }
};

export default retoReducer;
