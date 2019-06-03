import { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'

// State
import ProductContext from '../../state/product/context'

const NavigationBar = ({ userData }) => {
  const productContext = useContext(ProductContext)
  const pagesTotal = productContext.productState.products.length / 16
  const currentPage = productContext.productState.pageNumber + 1

  return (
    <Container>
      <LeftContainer>
        <span>{`${currentPage} of ${pagesTotal}`}</span>
      </LeftContainer>

      <RightContainer>
        {currentPage > 1 && (
          <button
            onClick={() =>
              productContext.setPageNumber(productContext.productState.pageNumber - 1)
            }>
            <i className='fas fa-angle-left' />
          </button>
        )}
        <button
          onClick={() =>
            productContext.setPageNumber(productContext.productState.pageNumber + 1)
          }>
          <i className='fas fa-angle-right' />
        </button>
      </RightContainer>
    </Container>
  )
}

const Container = styled.div`
  grid-column: 2 / -2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    font-size: 1.5rem;
    color: #616161;
  }
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    height: 3rem;
    width: 3rem;
    margin-left: 0.75rem;

    :focus {
      outline: none;
    }

    :hover {
      cursor: pointer;
    }

    i {
      color: #d9d9d9;
    }
  }
`

export default NavigationBar
