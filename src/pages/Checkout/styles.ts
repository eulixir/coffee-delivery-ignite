import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2.5rem 8rem;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FinishOrder = styled.div`
  margin-right: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  & > h2 {
    color: ${({ theme }) => theme['base-subtitle']};

    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`
