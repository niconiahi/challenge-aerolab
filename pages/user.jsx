import { useContext, useEffect } from 'react'
import styled from '@emotion/styled'

// API
import api from '../api'

// Components
import MainLayout from '../layouts/MainLayout'
import UserInformation from '../components/user/UserInformation'

// State
import UserContext from '../state/user/context'
import UserRedeemHistory from '../components/user/UserRedeemHistory'

const UserPage = ({ userData }) => {
  const userContext = useContext(UserContext)

  useEffect(() => {
    userContext.updateUserData(userData)
  }, [])

  const addPoints = async (quantity) => {
    await api.user.addPoints(quantity)
    const userDataRes = await api.user.getData()

    userContext.updateUserData(userDataRes.data)
  }

  return (
    <>
      <MainLayout>
        <Container>
          <UserInformation userData={userContext.userState.data} />
          <UserRedeemHistory userData={userContext.userState.data} />
        </Container>
      </MainLayout>
    </>
  )
}

const Container = styled.div`
  grid-column: 2 / -2;
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

UserPage.getInitialProps = async () => {
  let userData = {}

  try {
    const res = await api.user.getData()
    userData = res.data
  } catch (err) {
    console.error(err)
  }
  return { userData }
}

export default UserPage
