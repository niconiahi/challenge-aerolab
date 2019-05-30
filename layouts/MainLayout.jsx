import { useContext } from 'react'
import styled from '@emotion/styled'
import TopBar from './components/TopBar'
import Banner from './components/Banner'

// State
import UserContext from '../state/user/context'

const MainLayout = ({ children }) => {
  const userContext = useContext(UserContext)
  return (
    <Container>
      <TopBar userData={userContext.userState.data} />
      <Banner />
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template: auto / 6vw 1fr 6vw;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export default MainLayout
