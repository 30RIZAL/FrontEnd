import * as ActionUser from '../constants/User';

const INIT_STATE = {
  users: [],
  username: '',
  email: '',
  user_password: '',
  user_handphone: '',
  user_roles: '',
  status: false,
  isLoading: false,
  isLogout: false,
  authUser: JSON.parse(localStorage.getItem('@profile')),
  profile: {
    userId: undefined,
    username: '',
    email: '',
    numberPhone: '',
    roleType: '',
  },
  token: localStorage.getItem('@token'),
  isLogout: false,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionUser.ADD_SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionUser.ADD_SIGNUP_SUCCEED: {
      const { payload } = action;
      return {
        ...state,
          username: payload.username,
          email: payload.email,
          isLoading:false,
          isLogout:false,
          status:true
      };
    }
    case ActionUser.GET_SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionUser.GET_SIGNIN_SUCCEED: {
      const { payload } = action;
      return {
          ...state,
          profile:payload.profile,
          isLoading: false,
          status: true,
          isLogout : false
      }
    }
    case ActionUser.GET_SIGNOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionUser.GET_SIGNOUT_SUCCEED: {
        return {
            ...state,
            profile: {
                userId: undefined,
                username: '',
                email: '',
                roleType: '',
                numberPhone:''
            },
            isLoading: false,
            token:"",
            isLogout : false
        }
    }
    case ActionUser.SIGNUP_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    
    case ActionUser.SIGNIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ActionUser.GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ActionUser.GET_USER_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        users: action.payload
      };
    }

    default:
      return state;
  }
};

export default userReducer;
