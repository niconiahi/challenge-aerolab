import styled from '@emotion/styled'
import { format } from 'date-fns'

const RedeemedProduct = ({ product }) => {
  return (
    <>
      <Container>
        <div>
          <h3>{product.name}</h3>
        </div>
        <ProductInfoContainer>
          <h5>{`Cost: ${product.cost}`}</h5>
          <h5>{`Redeemed on: ${format(product.createDate, 'DD.MM.YYYY')}`}</h5>
        </ProductInfoContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  grid-column: 1 / 3;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #002c54;
  border: 1px solid #d70026;
  margin: 0.5vh 0;
  padding: 0 2vh;

  h5 {
    padding: 0 1vh;
    :not(:last-of-type) {
      border-right: 2px solid #d70026;
    }
  }
`

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default RedeemedProduct
