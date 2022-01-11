import * as ActionMety from '../constants/Mety';

const INIT_STATE = {
  mety: [],
  isLoading: false,
  succed: false,
  status: null,
  message: null,
  error: null,
};
const metyReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionMety.GET_METY_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionMety.GET_METY_SUCCEED: {
      const { payload } = action;

      return {
        ...state,
        mety: payload,
        status: 200,
        succeed: true,
      };
    }

    case ActionMety.GET_METY_FAILED: {
      return {
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default metyReducer;
