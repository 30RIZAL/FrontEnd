import * as ActionOrder from '../constants/Order';

const INIT_STATE = {
  order: [],
  cancel: '',
  isLoading: false,
  succed: false,
  status: null,
  message: null,
  error: null,
  info: '',
};

const orderReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionOrder.ADD_ORDER_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        order: payload,
        isLoading: true,
        status: 200,
        succeed: true,
      };
    }

    case ActionOrder.ADD_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        status: 200,
        succeed: true,
      };
    }

    case ActionOrder.ADD_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.data.error,
        status: 200,
      };
    }

    case ActionOrder.GET_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        status: 200,
        succeed: true,
      };
    }

    case ActionOrder.GET_ORDER_SUCCEED: {
      const { payload } = action;

      return {
        ...state,
        order: payload,
        isLoading: true,
        status: 200,
        succeed: true,
      };
    }

    case ActionOrder.GET_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    case ActionOrder.CANCEL_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionOrder.CANCEL_ORDER_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
        cancel: payload,
        isLoading: false,
        status: 200,
        succeed: true,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
