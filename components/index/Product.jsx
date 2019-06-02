import styled from '@emotion/styled'
import Link from 'next/link'

// Components
import RedeemButton from '../_shared/RedeemButton'

// Styled style
import { PointsContainer } from '../../layouts/components/TopBar'

const Product = ({ product, userData }) => {
  const productNameForUrl = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-')
  }

  const getNotEnoughNumber = () => {
    return `${product.cost - userData.points}`
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
          <DisplayOver>
            {userData.points > product.cost ? (
              <IconContainer>
                <i className='fas fa-shopping-bag' />
              </IconContainer>
            ) : (
              <NotEnoughContainer>
                <span>{`You need ${getNotEnoughNumber()}`}</span>
              </NotEnoughContainer>
            )}
          </DisplayOver>
          <HoverContainer>
            <PointsAndButtonContainer>
              <FancyPointsContainer>
                <span>{product.cost}</span>
                <div />
              </FancyPointsContainer>
              <RedeemButton product={product} />
            </PointsAndButtonContainer>
          </HoverContainer>
          {/* <span>{product.cost}</span>
          <RedeemButton product={product} userData={userData} /> */}
        </>
      )}
    </Container>
  )
}
const NotEnoughContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const PointsAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FancyPointsContainer = styled(PointsContainer)`
  background-color: transparent;
  color: white;
  font-size: 2.25rem;
`

const HoverContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25bbf1;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 350ms ease;

  :hover {
    opacity: 0.9;

    * {
      opacity: 1;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.625rem;
  z-index: 5;
  width: 2.625rem;
  border-radius: 50%;
  background-color: white;
  margin: 0.75rem 0.75rem 0 0;

  i {
    color: #0ad4fa;
  }
`

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

const DisplayOver = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: background-color 350ms ease;
  background-color: transparent;
  box-sizing: border-box;
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
  position: relative;
  align-items: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: white;

  h2 {
    color: #002c54;
  }

  img {
    cursor: pointer;
  }
`

export default Product

// _id, category, cost, name, img.url
