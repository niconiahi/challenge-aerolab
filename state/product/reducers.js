export const PRODUCTS_UPDATE = 'PRODUCTS_UPDATE'
export const PAGE_NUMBER_SET = 'PAGE_NUMBER_SET'

export const ProductReducers = (state, action) => {
  switch (action.type) {
    case PRODUCTS_UPDATE:
      return { ...state, products: action.products }
    case PAGE_NUMBER_SET:
      return { ...state, pageNumber: action.pageNumber }
    default:
      return state
  }
}
