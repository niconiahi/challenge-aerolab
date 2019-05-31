import styled from '@emotion/styled'
import Link from 'next/link'

// Material UI Icons
// import LogoIcon from '../../static/icons/logo.svg'
import FaceIcon from '@material-ui/icons/Face'

const TopBar = ({ userData }) => {
  return (
    <Container>
      <Link href='/'>
        <a>{/* <img src={LogoIcon} /> */}</a>
      </Link>

      <RightContainer>
        <Link href='/user'>
          <a>Jonh Kite</a>
        </Link>
        <PointsContainer>
          <span>{userData && `${userData.points}`}</span>
          <div />
        </PointsContainer>
      </RightContainer>
    </Container>
  )
}

const Container = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  margin: 1.5rem;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #616161;
    font-size: 1.5rem;
    text-decoration: none;
    margin-right: 1.125rem;
  }
`

const PointsContainer = styled.div`
  color: #616161;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  font-size: 1.5rem;
  height: 3rem;
  border-radius: 20.5px;
  background-color: #ededed;

  span {
    margin-right: 0.375rem;
  }

  div {
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle at 50% 50%, #ffcf00, #f7ae15);
    border-radius: 50%;
  }
`

export default TopBar
