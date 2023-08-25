import styled from 'styled-components'

export const CoffesList = styled.div`
  display: flex;
  align-items: center;

  display: flex;
  flex-wrap: wrap;
  width: 100;

  max-width: 1440px;

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
