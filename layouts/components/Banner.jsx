import styled from '@emotion/styled'

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home'
import FaceIcon from '@material-ui/icons/Face'

const NavigationBar = ({ userData }) => {
  return (
    <Container>
      <img src='https://dummyimage.com/1280x720/000/fff.png' />
    </Container>
  )
}

const Container = styled.div`
  grid-column: 1 / -1;
  height: 400px;
  margin-bottom: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export default NavigationBar
