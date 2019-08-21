import React, { useContext } from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
import api from '../../api'

// Components
import { ButtonClassic, Label } from '../../components/index/FiltersBar'

// State
import UserContext from '../../state/user/context'

const TopBar = ({ userData }) => {
  const userContext = useContext(UserContext)

  const addPoints = async (quantity) => {
    api.user.addPoints(quantity)
    const userDataRes = await api.user.getData()

    userContext.updateUserData(userDataRes.data)
  }

  return (
    <Container>
      <LeftContainer>
        <Label>Add points: </Label>
        <ButtonsContainer>
          <ButtonClassicReloaded onClick={() => addPoints(1000)}>
            1000
          </ButtonClassicReloaded>
          <ButtonClassicReloaded onClick={() => addPoints(5000)}>
            5000
          </ButtonClassicReloaded>
          <ButtonClassicReloaded onClick={() => addPoints(7500)}>
            7500
          </ButtonClassicReloaded>
        </ButtonsContainer>
      </LeftContainer>

      <RightContainer>
        <a>Jonh Kite</a>
        <PointsContainer>
          <span>{userData && `${userData.points}`}</span>
          <div />
        </PointsContainer>
      </RightContainer>
    </Container>
  )
}

const ButtonClassicReloaded = styled(ButtonClassic)`
  width: 7rem;

  @media (max-width: 430px) {
    width: 92vw;
    padding: 0;
    margin-right: 0 !important;
    margin-bottom: 4px;
  }
  font-size: 1.25rem;
  height: 3rem;
  border-radius: 20.5px;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  margin: 1.5rem;

  @media (max-width: 824px) {
    justify-content: center;
    flex-direction: column-reverse;

    > div:nth-child(2) {
      margin-bottom: 1.5rem;
    }
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button,
  label {
    margin-right: 1.5rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    label {
      margin-bottom: 1.5rem;
      align-self: center;
    }
  }
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

export const PointsContainer = styled.div`
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
