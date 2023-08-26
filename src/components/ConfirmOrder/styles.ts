import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 448px;
  width: 100%;

  & > h2 {
    margin-bottom: 1rem;

    color: ${({ theme }) => theme['base-subtitle']};

    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const Separator = styled.p`
  width: 100%;
  height: 1px;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-button']};
`

export const FinishOrder = styled.div`
  width: 100%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 6px 44px;
  background: ${({ theme }) => theme['base-card']};
`

export const CoffeeContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 232px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['base-card']};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
  }

  /* & > div:last-child {
    height: 24px;
    border: ${({ theme }) => theme['base-card']};
  }

  & > div:last-child {
    height: 24px;
    border: none;
  } */
`

export const Checkout = styled.div`
  width: 100%;

  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme['base-text']};

    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 0.93rem;
  }

  & > span:first-child {
    margin-bottom: 0.93rem;
    margin-top: 1.6rem;
  }

  & > span:nth-child(3) {
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 1.25rem;

    color: ${({ theme }) => theme['base-subtitle']};

    margin-top: 1rem;
  }

  & > button {
    width: 100%;
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;

    border-radius: 6px;
    background: ${({ theme }) => theme['brand-yellow']};

    outline: none;
    border: 2px solid ${({ theme }) => theme['brand-yellow']};

    cursor: pointer;
    & > * {
      color: ${({ theme }) => theme['base-white']};

      font-family: 'Roboto';
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;
    }
  }

  & > button:hover {
    background: ${({ theme }) => theme['brand-yellow-dark']};
    transition: 0.2s;
  }

  & > button:focus {
    background: ${({ theme }) => theme['brand-yellow-dark']};
    transition: 0.2s;
    border: 2px solid ${({ theme }) => theme['brand-yellow']};
  }
`
