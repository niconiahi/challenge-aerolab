import { useContext, useEffect } from 'react'

// API
import api from '../api'

// Components
import MainLayout from '../layouts/MainLayout'
import UserInformation from '../components/user/UserInformation'

// State
import UserContext from '../state/user/context'

const UserPage = ({ userData }) => {
  const userContext = useContext(UserContext)

  useEffect(() => {
    userContext.updateUserData(userData)
  }, [])

  return (
    <>
      <MainLayout>
        <UserInformation userData={userContext.userState.data} />
      </MainLayout>
    </>
  )
}

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
