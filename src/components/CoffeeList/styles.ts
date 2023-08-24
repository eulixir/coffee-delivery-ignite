import styled from 'styled-components'

export const CoffesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > * {
    width: 25%;
    margin-bottom: 40px;
  }
`

export const CoffeItem = styled.div`
  width: 256px;
  height: 310px;
  flex-shrink: 0;

  position: relative;

  & > div:first-child {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 6px 36px;
      margin-bottom: 12px;
    }
  }

  & > div:last-child {
    top: 20px;
    z-index: -1;
    position: absolute;
    width: 256px;
    height: 310px;
    border-radius: 6px 36px;
    background: ${({ theme }) => theme['base-card']};
  }
`

export const CoffeeTag = styled.div`
  background: ${({ theme }) => theme['base-card']};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  & > span {
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    background: var(--brand-yellow-light, #f1e9c9);

    color: var(--brand-yellow-dark, #c47f17);

    font-family: 'Roboto';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    margin-right: 4px;
  }
`
export const CoffeeName = styled.div`
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme['base-subtitle']};
  text-align: center;

  font-family: 'Baloo 2';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`
export const CoffeeDescription = styled.div`
  width: 216px;

  color: ${({ theme }) => theme['base-label']};
  text-align: center;

  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  margin-bottom: 2.0625rem;
`

export const BuyContainer = styled.div`
  width: 208px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    color: ${({ theme }) => theme['base-text']};
    text-align: right;

    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    & > span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
    }
  }
`
