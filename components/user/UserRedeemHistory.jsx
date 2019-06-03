import { useContext } from 'react'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import api from '../../api'

// Components
import RedeemedProduct from '../../components/user/RedeemedProduct'

// State
import UserContext from '../../state/user/context'

const UserRedeemHistory = ({ userData }) => (
  <UserRedeemHistoryContainer>
    {userData.redeemHistory.map((product) => (
      <RedeemedProduct key={product.name} product={product} />
    ))}
  </UserRedeemHistoryContainer>
)

const UserRedeemHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d70026;

  > h3 {
    border-bottom: 3px dashed #002c54;
  }
`
export default UserRedeemHistory
