import { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import * as R from 'ramda'
// API
import api from '../api'

// Components
import MainLayout from '../layouts/MainLayout'
import Product from '../components/index/Product'
import FiltersBar from '../components/index/FiltersBar'
import NavigationBar from '../layouts/components/NavigationBar'

// State
import ProductContext from '../state/product/context'
import UserContext from '../state/user/context'

const IndexPage = ({ products, userData }) => {
  const [isDescending, setIsDescending] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [prop, setProp] = useState('Cost')
  const [criteria, setCriteria] = useState('')

  const productContext = useContext(ProductContext)
  const userContext = useContext(UserContext)
  const currentPage = productContext.productState.pageNumber
  const pageProducts = productContext.getProductsPage(currentPage)

  useEffect(() => {
    productContext.updateProductList(products)
    userContext.updateUserData(userData)
  }, [])

  const getCategoryOptions = () => {
    return pageProducts.reduce((acc, product) => {
      if (acc.indexOf(product.category) === -1) {
        acc.push(product.category)
      }
      return acc
    }, [])
  }

  const productsToShow = () => {
    return R.pipe(
      R.filter((product) => product.name.toLowerCase().includes(criteria.toLowerCase())),
      R.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      ),
      R.ifElse(
        () => isDescending,
        R.sort(R.descend(R.prop(prop.toLowerCase()))),
        R.sort(R.ascend(R.prop(prop.toLowerCase())))
      )
    )(pageProducts)
  }

  return (
    <>
      <MainLayout>
        <Container>
          <FiltersBar
            categoryOptions={getCategoryOptions()}
            setIsDescending={setIsDescending}
            isDescending={isDescending}
            setProp={setProp}
            setCriteria={setCriteria}
            setSelectedCategory={setSelectedCategory}
          />
          <NavigationBar />

          <ProductsContainer>
            {pageProducts &&
              productsToShow().map((product) => (
                <Product
                  key={product._id}
                  product={product}
                  userData={userContext.userState.data}
                />
              ))}
          </ProductsContainer>
        </Container>
      </MainLayout>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProductsContainer = styled.div`
  grid-column: 2 / -2;
  display: grid;
  grid-template: auto / repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
  margin-bottom: 3.75rem;
`

IndexPage.getInitialProps = async () => {
  let products = []
  let userData = {}
  try {
    const userDataRes = await api.user.getData()
    userData = userDataRes.data

    const productsRes = await api.product.getAllProducts()
    products = productsRes.data
  } catch (err) {
    console.error(err)
  }
  return { products, userData }
}

export default IndexPage
