import styled from '@emotion/styled'
import Link from 'next/link'

// Components
import RedeemButton from '../_shared/RedeemButton'

const Product = ({ product, userData }) => {
  const productNameForUrl = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-')
  }

  return (
    <Container>
      {product && userData && (
        <>
          <Link
            href={{
              pathname: '/detail',
              query: { id: product._id },
            }}
            as={`/detail/${productNameForUrl(product.name)}`}>
            <ImageContainer>
              <img src={product.img.url} />
            </ImageContainer>
          </Link>
          <InformationContainer>
            <h6>{product.category}</h6>
            <h5>{product.name}</h5>
          </InformationContainer>
          {/* <span>{product.cost}</span>
          <RedeemButton product={product} userData={userData} /> */}
        </>
      )}
    </Container>
  )
}

const InformationContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 1rem;

  h6,
  h5 {
    margin: 0.1rem;
  }

  h5 {
    font-size: 1rem;
    color: #616161;
  }

  h6 {
    font-size: 0.75rem;
    color: #a3a3a3;
  }
`

const ImageContainer = styled.div`
  max-height: 180px;
  margin-top: 5%;
  max-width: 90%;
  border-bottom: 1px solid #f9f9f9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container = styled.div`
  display: flex;
  height: 270px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: white;

  h2 {
    color: #002c54;
  }

  h3,
  span {
    background-color: #002c54;
    color: #ffec5c;
    padding: 0.5vh;
    border-radius: 0.5vh;
    align-self: flex-end;
    margin-right: 1vh;
  }

  img {
    cursor: pointer;
  }
`

export default Product

// _id, category, cost, name, img.url
