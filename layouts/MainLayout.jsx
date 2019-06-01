import { useContext } from 'react'
import styled from '@emotion/styled'
import TopBar from './components/TopBar'
import Banner from './components/Banner'

// State
import UserContext from '../state/user/context'
import NavigationBar from './components/NavigationBar'

const MainLayout = ({ children }) => {
  const userContext = useContext(UserContext)
  const userData = userContext.userState.data
  const addPoints = userContext.addPoints
  return (
    <Container>
      <TopBar userData={userData} addPoints={addPoints} />
      <Banner />
      {children}
      <NavigationBar />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template: auto / 6vw 1fr 6vw;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export default MainLayout
