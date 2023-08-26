import styled from 'styled-components'

export const CoffeeCard = styled.div`
  width: 100%;
  height: 80px;

  padding: 8px;

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
`

export const CoffeeImage = styled.div`
  height: 100%;

  display: flex;

  justify-content: center;
  flex-direction: row;
`

export const CoffeeSummary = styled.div`
  & {
    margin-left: 1rem;

    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    & > p {
      color: ${({ theme }) => theme['base-text']};
      text-align: right;

      font-family: 'Roboto';
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      margin-bottom: 0.5rem;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      & > button {
        display: flex;
        height: 34px;
        padding: 0px 8px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        margin-left: 0.5rem;

        border-radius: 6px;
        cursor: pointer;

        & > span {
          color: ${({ theme }) => theme['base-text']};

          font-family: 'Roboto';
          font-size: 0.75rem;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          text-transform: uppercase;
        }

        & > svg {
          color: ${({ theme }) => theme['brand-purple']};
        }

        background: ${({ theme }) => theme['base-button']};
        outline: none;
        border: 2px solid ${({ theme }) => theme['base-button']};

        &:hover,
        &:focus {
          background: ${({ theme }) => theme['base-hover']};

          & > svg {
            color: ${({ theme }) => theme['brand-purple-dark']};
          }

          & > span {
            color: ${({ theme }) => theme['base-subtitle']};
          }
        }
      }
    }
  }
`
