import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  margin-top: 0.75rem;

  border-radius: 6px;
  background: ${({ theme }) => theme['base-card']};

  & > span {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    & > svg {
      margin-top: 0.3rem;
      margin-right: 0.5rem;
      color: ${({ theme }) => theme['brand-purple']};
    }

    & > div {
      & > h3 {
        color: ${({ theme }) => theme['base-text']};
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }

      & > p {
        color: ${({ theme }) => theme['base-text']};
        font-family: 'Roboto';
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

interface PaymentMethodButtonProps {
  isActive: boolean
}

export const PaymentButton = styled.button<PaymentMethodButtonProps>`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex: 1 0 0;
  outline: none;
  border: none;

  width: 100%;
  height: 51px;

  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};

  & > svg {
    color: ${({ theme }) => theme['brand-purple']};
  }

  & > span {
    color: ${({ theme }) => theme['base-text']};

    font-family: 'Roboto';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  &:focus {
    background: ${({ isActive, theme }) =>
      isActive ? theme['brand-purple-light'] : theme['base-button']};
  }

  background: ${({ isActive, theme }) =>
    isActive ? theme['brand-purple-light'] : theme['base-button']};

  border: ${({ isActive, theme }) =>
    isActive ? `1px solid ${theme['brand-purple']}` : 'none'};
`
