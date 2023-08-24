import * as S from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const itensInCart = 1

  return (
    <S.Container>
      <img src={Logo} alt="Logo" />
      <div>
        <S.LocationBox>
          <MapPin size={24} weight="fill" />
          <p>Brasília, RS</p>
        </S.LocationBox>
        <S.CartButton>
          <ShoppingCart size={24} weight="fill" />
          {itensInCart > 0 && <span>{itensInCart}</span>}
        </S.CartButton>
      </div>
    </S.Container>
  )
}
