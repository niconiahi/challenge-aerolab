import { useContext } from 'react'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import api from '../../api'

// Components
import { ButtonClassic } from '../../components/index/FiltersBar'

// State
import UserContext from '../../state/user/context'

const UserInformation = ({ userData }) => (
  <Container>
    <h2>{userData.name}</h2>
    <h3>{`Joined: ${format(userData.createDate, 'DD MMMM of YYYY')}`}</h3>
    <h4>Press a button and get more points</h4>
    <LeftContainer>
      <ButtonClassic onClick={() => addPoints(1000)}>
        <strong>
          <p>1000</p>
        </strong>
      </ButtonClassic>
      <ButtonClassic onClick={() => addPoints(5000)}>
        <strong>
          <p>5000</p>
        </strong>
      </ButtonClassic>
      <ButtonClassic onClick={() => addPoints(7500)}>
        <strong>
          <p>7500</p>
        </strong>
      </ButtonClassic>
    </LeftContainer>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #d70026;

  h3,
  h2 {
    border-bottom: 3px solid #002c54;
  }

  * {
    margin: 0;
  }

  > h4 {
    color: #002c54;
  }
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    margin: 1.5rem 0;
    margin-right: 0.5rem;
  }
`

export default UserInformation
