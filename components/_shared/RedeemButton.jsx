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
        onClick={
          userData.points > product.cost ? () => redeemProduct(product._id) : false
        }>
        {userData.points > product.cost ? (
          'Reedem now'
        ) : (
          <strong>{`- ${Math.abs(userData.points - product.cost)}`}</strong>
        )}
      </Button>
    </>
  )
}

const Button = styled.div`
  display: flex;
  align-items: center;
  color: #616161;
  justify-content: center;
  width: 14.25rem;
  height: 2.625rem;
  border-radius: 1.25rem;
  background-color: white;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

export default RedeemButton
