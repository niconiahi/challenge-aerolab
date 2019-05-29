import { useContext } from 'react'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import api from '../../api'

// Components
import RedeemedProduct from '../../components/user/RedeemedProduct'

// State
import UserContext from '../../state/user/context'

const UserInformation = ({ userData }) => {
  const userContext = useContext(UserContext)

  const addPoints = async (quantity) => {
    await api.user.addPoints(quantity)
    const userDataRes = await api.user.getData()

    userContext.updateUserData(userDataRes.data)
  }

  return (
    <>
      <UserDataContainer>
        <h2>{userData.name}</h2>
        <h3>{`Joined: ${format(userData.createDate, 'DD MMMM of YYYY')}`}</h3>
        <h4>Press a button and get more points</h4>
        <LeftContainer>
          <Button onClick={() => addPoints(1000)}>
            <strong>
              <p>1000</p>
            </strong>
          </Button>
          <Button onClick={() => addPoints(5000)}>
            <strong>
              <p>5000</p>
            </strong>
          </Button>
          <Button onClick={() => addPoints(7500)}>
            <strong>
              <p>7500</p>
            </strong>
          </Button>
        </LeftContainer>
      </UserDataContainer>
      <UserRedeemHistoryContainer>
        <h3>Redeem History</h3>
        {userData.redeemHistory.map((product) => (
          <RedeemedProduct product={product} />
        ))}
      </UserRedeemHistoryContainer>
    </>
  )
}

const UserDataContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #d70026;

  h3,
  h2 {
    border-bottom: 3px solid #002c54;
  }

  > h4 {
    color: #002c54;
  }
`

const UserRedeemHistoryContainer = styled.div`
  grid-column: 3 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d70026;

  > h3 {
    border-bottom: 3px dashed #002c54;
  }
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Button = styled.div`
  display: flex;
  color: #ffec5c;
  align-items: center;
  justify-content: center;
  height: 6vh;
  width: 12vh;
  background-color: #d70026;
  border-radius: 0.5vh;
  margin-right: 3vh;
  cursor: pointer;

  :first-of-type {
    margin-left: 3vh;
  }
`

export default UserInformation
