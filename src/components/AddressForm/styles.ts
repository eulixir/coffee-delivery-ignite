import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  width: 100%;

  border-radius: 6px;

  background: ${({ theme }) => theme['base-card']};

  & > span {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    & > svg {
      margin-top: 0.3rem;
      margin-right: 0.5rem;
      color: ${({ theme }) => theme['brand-yellow-dark']};
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  & > input {
    margin-bottom: 1rem;
    border: 1px solid transparent;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  & input:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme['brand-purple']};
  }
`
interface InputProps {
  width?: string
  margin?: string
}

export const Input = styled.input<InputProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  margin-right: ${({ margin }) => margin || '0'};

  padding: 12px;
  align-items: center;
  gap: 4px;

  border: 1px solid transparent;
  background: ${({ theme }) => theme['base-input']};
`
