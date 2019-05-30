import styled from '@emotion/styled'

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home'
import FaceIcon from '@material-ui/icons/Face'

const NavigationBar = ({ userData }) => {
  return (
    <Container>
      <Link href='/'>
        <a>
          <HomeIcon />
        </a>
      </Link>

      <RightContainer>
        <span>{userData && `Points:  ${userData.points}`}</span>
        <Link href='/user'>
          <a>
            <FaceIcon />
          </a>
        </Link>
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
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export default NavigationBar
