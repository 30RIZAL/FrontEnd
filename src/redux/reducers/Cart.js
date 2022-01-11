import * as ActionCart from '../constants/Cart';


const INIT_STATE = {
    products : [],
    cart:[],
    totalProduct : 0,
    isLoading: false,
    succed: false,
    status: null,
    message: null,
    error: null
}

const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionCart.ADD_TO_CART: {
            const {data} = action
            return {
                ...state,
                products : data.reto_id,
                totalProduct: state.totalProduct+1
            }
        }

        case ActionCart.ADD_TO_CART_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case ActionCart.ADD_TO_CART_FAILED: {
            return {
                isLoading: false,
                error: action.data.error,
            }
        }

         case ActionCart.GET_CART_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case ActionCart.GET_CART_SUCCEED: {
            const { payload } = action;

            return {
                ...state,
                cart :payload
            }
        }

        case ActionCart.GET_CART_FAILED: {
            return {
                isLoading: false,
                error: action.payload.error,
            }
        }

        case ActionCart.DELETE_CART_REQUEST: {
            return {
              ...state,
              isLoading: true,
            };
          }
          case ActionCart.DELETE_CART_SUCCEED: {
            const { payload } = action;
            const cart = state.cart.cart_line_items.filter(cart => cart.clit_id !== payload.id);
            return {
              ...state,
              cart,
              totalProduct: state.totalProduct-1,
              status: 200,
              succeed: true,
            };
        }

        case ActionCart.FIND_CART_REQUEST: {
            return {
              ...state,
              isLoading: true,
            };
          }
      
          case ActionCart.FIND_CART_SUCCEED: {
            const { payload } = action;
            return {
              ...state,
              products: payload,
            };
          }
          case ActionCart.UPDATE_CART_REQUEST: {
            return {
              ...state,
              isLoading: true,
            };
          }
          case ActionCart.UPDATE_CART_SUCCEED:{
            const { payload } = action;
              return{
                  ...state,
                  products:payload,
                  isLoading: true,
                  status: 200,
                  succeed: true,
                  
              }
          }
        default:
            return state;
    }

}

export default cartReducer