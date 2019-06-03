import { useReducer } from 'react'

import ProductContext from './product/context'
import { ProductReducers, PRODUCTS_UPDATE, PAGE_NUMBER_SET } from './product/reducers'
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
    pageNumber: 0,
  })
  const [userState, userDispatch] = useReducer(UserReducers, { data: {} })

  const getProductsPage = () => {
    return productState.products.slice(
      productState.pageNumber * 16,
      (productState.pageNumber + 1) * 16
    )

    // The below code generates an array of arrays of 16 elements but I decided not to use it
    //
    // let productsPaginated = []
    // let pageNumber = 0
    //
    // while (pageNumber < productState.products.length / pageSize) {
    //   productsPaginated.push(
    //     productState.products.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
    //   )
    //   pageNumber++
    // }
    //
    // return productsPaginated
  }

  const setPageNumber = (pageNumber) => {
    productDispatch({ type: PAGE_NUMBER_SET, pageNumber })
  }

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
    <ProductContext.Provider
      value={{
        productState,
        updateProductList,
        getProductsPage,
        setPageNumber,
      }}>
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
