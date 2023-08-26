import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 8rem;

  margin: 0 auto;

  & > h2 {
    color: ${({ theme }) => theme['brand-yellow-dark']};

    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  & > p {
    color: ${({ theme }) => theme['base-subtitle']};

    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    margin-top: 0.25rem;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  width: 100%;

  align-items: space-between;
  justify-content: space-between;

  margin-right: 102px;

  margin-top: 2.5rem;
  & > img {
    width: 492px;
    height: 293px;
    flex-shrink: 0;
  }

  & > div {
    border: 1px solid ${({ theme }) => theme['brand-purple']};
    border-radius: 6px 36px;
    display: flex;
    width: 526px;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > span {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    & > p {
      color: ${({ theme }) => theme['base-text']};

      color: var(--base-text, #574f4d);

      font-family: 'Roboto';
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
    #highlight {
      font-weight: 700;
    }
  }

  & > div {
    border-radius: 50%;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-right: 12px;

    & > svg {
      color: ${({ theme }) => theme['base-white']};
    }
  }

  #map {
    background-color: ${({ theme }) => theme['brand-purple']};
  }

  #timer {
    background-color: ${({ theme }) => theme['brand-yellow']};
  }

  #dollar {
    background-color: ${({ theme }) => theme['brand-yellow-dark']};
  }
`
