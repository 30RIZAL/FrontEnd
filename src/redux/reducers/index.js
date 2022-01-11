import { combineReducers } from 'redux';
import categoryReducer from './Category';
import userReducer from './User';
import productReducer from './Product';
import cartReducer from './Cart';
import orderReducer from './Order';
import recaReducer from './Reca';
import remeReducer from './Reme';
import retoReducer from './Reto';
import metyReducer from './Mety';
import addresReducer from './Addres'


const rootReducer = combineReducers({
  categoryState: categoryReducer,
  userState : userReducer,
  productState : productReducer,
  cartState : cartReducer,
  orderState : orderReducer,
  recaState: recaReducer,
  remeState : remeReducer,
  addresState:addresReducer,
  retoState : retoReducer,
  metyState : metyReducer,
});

export default rootReducer;