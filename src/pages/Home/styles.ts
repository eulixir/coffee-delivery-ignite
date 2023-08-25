import styled from 'styled-components'
import BannerBackground from '../../assets/intro.png'

export const Container = styled.div``

export const Banner = styled.div`
  width: 100vw;
  height: 544px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 8rem;

  background: url(${BannerBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & > img {
    width: 476px;
    height: 360px;
    flex-shrink: 0;
  }

  & > main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;

    padding-top: 5.875rem;
    padding-bottom: 7.25rem;
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    text-align: center;
    padding: 0;
    height: auto;

    & > img {
      width: 50%;
      height: 50%;
    }

    & > main {
      padding: 0;
      display: flex;
      align-items: space-between;
      justify-content: space-between;
    }
  }
`

export const BannertText = styled.div`
  & > h3 {
    align-self: stretch;
    color: ${(props) => props.theme['base-title']};

    font-family: 'Baloo 2';
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  & > p {
    color: var(--base-subtitle, #403937);

    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  @media (max-width: 1280px) {
    & > h3 {
      margin-bottom: 1.25rem;
    }

    & > p {
      margin-bottom: 1.25rem;
    }
  }
`

export const ProsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  & > span:nth-child(1) {
    margin-bottom: 1.25rem;
    justify-content: flex-start;

    & > div {
      background: ${(props) => props.theme['brand-yellow-dark']};
      color: ${(props) => props.theme['base-white']};
    }
  }

  & > span:nth-child(2) {
    margin-bottom: 1.25rem;
    justify-content: flex-start;

    & > div {
      background: ${(props) => props.theme['base-text']};
      color: ${(props) => props.theme['base-white']};
    }
  }

  & > span:nth-child(3) {
    justify-content: flex-start;

    & > div {
      background: ${(props) => props.theme['brand-yellow']};
      color: ${(props) => props.theme['base-white']};
    }
  }

  & > span:nth-child(4) {
    justify-content: flex-start;

    & > div {
      background: ${(props) => props.theme['brand-purple']};
      color: ${(props) => props.theme['base-white']};
    }
  }

  & > span {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: row;

    & > div {
      margin-right: 0.75rem;

      display: flex;

      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 8px;

      border-radius: 1000px;
    }
    & > p {
      color: ${(props) => props.theme['base-text']};

      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }
  @media (max-width: 1280px) {
    & {
      flex-direction: column;
    }

    & > span {
      margin-bottom: 1.25rem;
    }
  }
`

export const CoffesContainer = styled.div`
  display: flex-start;
  width: 100%;
  height: 1645px;
  padding: 32px 160px 157px 130px;
  flex-direction: column;
  align-items: center;

  flex-shrink: 0;

  & > h3 {
    font-family: 'Baloo 2';
    margin-bottom: 2.25rem;

    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  @media (max-width: 1280px) {
    margin-top: 2.25rem;
    border-top: 0.3px solid ${(props) => props.theme['base-subtitle']};
    padding: 0;

    & > h3 {
      padding-top: 2.25rem;
    }
  }
`
