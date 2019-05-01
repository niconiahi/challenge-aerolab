import api from '../../api';

export const PRODUCT_REDEEM = "PRODUCT_REDEEM";
export const USER_UPDATE = "USER_UPDATE";
export const POINTS_ADD = "POINTS_ADD";

const redeemProduct = async (productId, state) => {
  await api.user.redeemProduct(productId);
  const userDataRes = await api.user.getData();
  return { ...state, data: userDataRes.data }
};

const addPoints = async (quantity, state) => {
  await api.user.addPoints(quantity);
  const userDataRes = await api.user.getData();
  return { ...state, data: userDataRes.data }
}

export const UserReducers = (state, action) => {
  switch (action.type) {
    case PRODUCT_REDEEM:
      return redeemProduct(action.productId, state);
    case USER_UPDATE:
      return { ...state, data: action.userData };
    case POINTS_ADD: 
      return addPoints(action.quantity, state);
    default:
      return state;
  }
};
