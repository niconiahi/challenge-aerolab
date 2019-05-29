import { useReducer } from 'react'

import ProductContext from './product/context'
import { ProductReducers, PRODUCTS_UPDATE } from './product/reducers'
import UserContext from './user/context'
import {
  UserReducers,
  USER_UPDATE,
  /* PRODUCT_REDEEM,
  POINTS_ADD */
} from './user/reducers'

const GlobalState = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductReducers, {
    products: [],
  })
  const [userState, userDispatch] = useReducer(UserReducers, { data: {} })

  const updateProductList = (products) => {
    productDispatch({ type: PRODUCTS_UPDATE, products })
  }

  const updateUserData = (userData) => {
    userDispatch({ type: USER_UPDATE, userData })
  }

  // Las pretendia usar pero tuve un problema con useReducer
  // y el hecho de que no se por que razon no se puede ejecutar async-await
  // en el body de su ejecucion. Si hay dudas de lo que intente hacer, por favor
  // comunicarse conmigo. Encantado de explicar como lo encare

  // const redeemProduct = productId => {
  //   userDispatch({ type: PRODUCT_REDEEM, productId });
  // };

  // const addPoints = quantity => {
  //   userDispatch({ type: POINTS_ADD, quantity });
  // };

  return (
    <ProductContext.Provider value={{ productState, updateProductList }}>
      <UserContext.Provider
        value={{ userState, updateUserData /* redeemProduct, addPoints */ }}>
        {children}
      </UserContext.Provider>
    </ProductContext.Provider>
  )
}

export default GlobalState

// const productContext = useContext(ProductContext);
// const userContext = useContext(UserContext);
