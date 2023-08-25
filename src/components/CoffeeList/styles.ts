import styled from 'styled-components'

export const CoffesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  width: 100;

  max-width: 100%;

  & > * {
    margin-bottom: 80px;
  }

  @media (max-width: 580px) {
    & {
      justify-content: center;
    }

    & > * {
      margin-bottom: 40px;
    }
  }
`
