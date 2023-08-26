import styled from 'styled-components'

export const CounterContainer = styled.div`
  & {
    display: inline-flex;
    height: 34px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--base-button, #e6e5e5);

    & > p {
      margin-left: 4px;
      margin-right: 4px;

      color: ${({ theme }) => theme['base-title']};
      text-align: center;

      font-family: 'Roboto';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    & > button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;

      & > svg {
        color: ${({ theme }) => theme['brand-purple']};

        &: hover {
          color: ${({ theme }) => theme['brand-purple-dark']};
        }
      }
    }
  }
`
