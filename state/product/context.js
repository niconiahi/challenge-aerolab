import React from 'react'

export default React.createContext({
  products: [],
  pagesTotal: 0,
  updateProductList: () => {},
  setPageNumber: () => {},
})
