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
      <BottomContainer>
        {children}
        <NavigationBar />
      </BottomContainer>
    </Container>
  )
}

const BottomContainer = styled.div`
  width: 100%;
  padding: 0 7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export default MainLayout
