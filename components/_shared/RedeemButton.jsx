import { useContext } from 'react'
import styled from '@emotion/styled'
import api from '../../api'

// State
import UserContext from '../../state/user/context'

const RedeemButton = ({ product }) => {
  const userContext = useContext(UserContext)
  const userData = userContext.userState.data

  const redeemProduct = async (productId) => {
    await api.user.redeemProduct(productId)
    const userDataRes = await api.user.getData()

    userContext.updateUserData(userDataRes.data)
  }

  return (
    <>
      <Button
        product={product}
        userData={userData}
        disabled={userData.points < product.cost}
        onClick={() => redeemProduct(product._id)}>
        {userData.points > product.cost ? (
          <span>Reedem now</span>
        ) : (
          <span>You need more points</span>
        )}
      </Button>
    </>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #616161;
  border: none;
  justify-content: center;
  width: 14.25rem;
  height: 2.625rem;
  border-radius: 1.25rem;
  background-color: white;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }
`

export default RedeemButton
