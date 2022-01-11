import { takeEvery, all } from 'redux-saga/effects';
import * as ActionType from '../constants/Category';
import * as ActionReme from '../constants/Reme';
import * as ActionReto from '../constants/Reto';
import * as ActionReca from '../constants/Reca';
import * as ActionUser from '../constants/User';
import * as ActionCart from '../constants/Cart';
import * as ActionOrder from '../constants/Order';
import * as ActionAddres from '../constants/Addres';
import * as ActionMety from '../constants/Mety';

import {
  handleGetCategory,
  handleCreateCategory,
  handleUpdateCategory,
  handleDeleteCategory,
} from '../sagas/CategorySaga';
import {
  handleCreatereca,
  handleDeleteReca,
  handleGetReca,
  handleUpdateReca,
} from '../sagas/Reca';
import {
  handleAddReme,
  handleGetReme,
  handleDeleteReme,
  handleUpdateReme,
  handleFindReme,
  handleSearchReme
} from '../sagas/Reme';
import {
  handleGetUser,
  handleSignin,
  handleSignout,
  handleSignup,
} from '../sagas/UserSaga';
import {
  handleAddOrder,
  handleCancelOrder,
  handleGetOrder,
} from '../sagas/Order';
import {
  handleAddCart,
  handleGetCart,
  handleDeleteCart,
  handleUpdateCart,
} from '../sagas/Cart';
import {
  handleAddAddres,
  handleDeleteAddres,
  handleFindAddres,
  handleGetAddres,
  handleUpdateAddres,
} from './Addres';
import {
  handleAddReto,
  handleDeleteReto,
  handleFindReto,
  handleGetReto,
  handleUpdateReto
} from './Reto';
import {handleGetMety} from './Mety'
function* watchAll() {
  yield all([
    takeEvery(ActionType.GET_CATEGORY_REQUEST, handleGetCategory),
    takeEvery(ActionType.CREATE_CATEGORY_REQUEST, handleCreateCategory),
    takeEvery(ActionType.UPDATE_CATEGORY_REQUEST, handleUpdateCategory),
    takeEvery(ActionType.DELETE_CATEGORY_REQUEST, handleDeleteCategory),
    takeEvery(ActionUser.GET_USER_REQUEST, handleGetUser),
    takeEvery(ActionUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionReca.GET_RECA_REQUEST, handleGetReca),
    takeEvery(ActionReca.CREATE_RECA_REQUEST, handleCreatereca),
    takeEvery(ActionReca.UPDATE_RECA_REQUEST, handleUpdateReca),
    takeEvery(ActionReca.DELETE_RECA_REQUEST, handleDeleteReca),
    takeEvery(ActionReme.ADD_REME_REQUEST, handleAddReme),
    takeEvery(ActionReme.GET_REME_REQUEST, handleGetReme),
    takeEvery(ActionReme.SEARCH_REME_REQUEST, handleSearchReme),
    takeEvery(ActionReme.UPDATE_REME_REQUEST, handleUpdateReme),
    takeEvery(ActionReme.DELETE_REME_REQUEST, handleDeleteReme),
    takeEvery(ActionReme.UPDATE_REME_REQUEST, handleUpdateReme),
    takeEvery(ActionReme.FIND_REME_REQUEST, handleFindReme),
    takeEvery(ActionCart.ADD_TO_CART_REQUEST, handleAddCart),
    takeEvery(ActionCart.GET_CART_REQUEST, handleGetCart),
    takeEvery(ActionCart.DELETE_CART_REQUEST, handleDeleteCart),
    takeEvery(ActionCart.UPDATE_CART_REQUEST, handleUpdateCart),
    takeEvery(ActionOrder.ADD_ORDER_REQUEST, handleAddOrder),
    takeEvery(ActionOrder.GET_ORDER_REQUEST, handleGetOrder),
    takeEvery(ActionOrder.CANCEL_ORDER_REQUEST, handleCancelOrder),
    takeEvery(ActionAddres.ADD_TO_ADDRES_REQUEST, handleAddAddres),
    takeEvery(ActionAddres.GET_ADDRES_REQUEST, handleGetAddres),
    takeEvery(ActionAddres.FIND_ADDRES_REQUEST, handleFindAddres),
    takeEvery(ActionAddres.DELETE_ADDRES_REQUEST, handleDeleteAddres),
    takeEvery(ActionAddres.UPDATE_ADDRES_REQUEST, handleUpdateAddres),
    takeEvery(ActionReto.ADD_RETO_REQUEST, handleAddReto),
    takeEvery(ActionReto.GET_RETO_REQUEST, handleGetReto),
    takeEvery(ActionReto.FIND_RETO_REQUEST, handleFindReto),
    takeEvery(ActionReto.DELETE_RETO_REQUEST, handleDeleteReto),
    takeEvery(ActionReto.UPDATE_RETO_REQUEST, handleUpdateReto),
    takeEvery(ActionMety.GET_METY_REQUEST, handleGetMety),

  ]);
}

export default watchAll;
