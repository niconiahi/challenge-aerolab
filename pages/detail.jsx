import { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import api from '../api'

// Components
import MainLayout from '../layouts/MainLayout'
import RedeemButton from '../components/_shared/RedeemButton'

// State
import ProductContext from '../state/product/context'

const DetailsPage = ({ products, product }) => {
  const productContext = useContext(ProductContext)

  useEffect(() => {
    productContext.updateProductList(products)
  }, [])

  return (
    <MainLayout>
      <Container>
        <ImgContainer>
          <img src={product.img.hdUrl} />
        </ImgContainer>
        <SpecContainer>
          <div>
            <h2>{product.name}</h2>
            <h3>{product.category}</h3>
          </div>
          <RedeemButton product={product}>${product.cost}</RedeemButton>
        </SpecContainer>
      </Container>
    </MainLayout>
  )
}

const Container = styled.div`
  grid-column: 2 / -2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  align-items: center;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
`

const SpecContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    color: #616161;
    margin: 0;
  }

  h3 {
    margin-top: 0;
    color: #a3a3a3;
  }
`

DetailsPage.getInitialProps = async (router) => {
  let products = []
  let product = {}
  try {
    const productsRes = await api.product.getAllProducts()
    products = productsRes.data
    product = products.find((x) => x._id === router.query.id)
  } catch (err) {
    console.error(err)
  }
  return { products, product }
}

export default DetailsPage
