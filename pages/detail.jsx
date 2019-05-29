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
      <ImgContainer>
        <img src={product.img.hdUrl} />
      </ImgContainer>
      <SpecContainer>
        <h2>{product.name}</h2>
        <h3>{product.category}</h3>
        <h4>{`Cost: ${product.cost}`}</h4>
        <RedeemButton product={product} />
      </SpecContainer>
    </MainLayout>
  )
}

const ImgContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    border: 4px solid #002c54;
  }
`

const SpecContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2,
  h3 {
    color: #d70026;
  }

  h4 {
    color: #002c54;
  }

  :last-child {
    color: #ffec5c;
  }

  * {
    margin: 2vh 0;
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
