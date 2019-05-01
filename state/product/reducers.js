export const PRODUCTS_UPDATE = "PRODUCTS_UPDATE";

export const ProductReducers = (state, action) => {
  switch (action.type) {
    case PRODUCTS_UPDATE:
      return { ...state, products: action.products };
    default:
      return state;
  }
};
