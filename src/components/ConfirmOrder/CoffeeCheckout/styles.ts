import styled from 'styled-components'

export const CoffeCard = styled.div`
  width: 100%;
  height: 104px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    & > p {
      display: flex;

      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      align-self: stretch;

      color: ${({ theme }) => theme['base-text']};
      text-align: right;

      font-family: 'Roboto';
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }
  }
`

export const CoffeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  & > div {
    margin-left: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
