import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 2rem 8rem;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 0.75rem;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${({ theme }) => theme['brand-purple-light']};

  & > svg {
    color: ${({ theme }) => theme['brand-purple']};
  }

  & > p {
    color: ${({ theme }) => theme['brand-purple-dark']};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
export const CartButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  background: ${({ theme }) => theme['brand-yellow-light']};

  outline: none;

  position: relative;
  border: 1px solid transparent;

  & > svg {
    color: ${({ theme }) => theme['brand-yellow']};
  }

  & > span {
    position: absolute;
    right: -8.345px;
    top: -8px;

    background: ${({ theme }) => theme['brand-yellow-dark']};

    border-radius: 50%;

    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme['brand-white']};

    color: var(--base-white, #fff);
    text-align: center;

    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.72px;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme['brand-yellow-dark']};
    filter: brightness(0.9);
  }
`
