import * as S from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

export function Header() {
  const { cartItems } = useContext(ShoppingCartContext)
  const [itemsInCart, setItemsInCart] = useState(0)

  useEffect(() => {
    const totalItemsInCart = cartItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)

    setItemsInCart(totalItemsInCart)
  }, [cartItems])

  return (
    <S.Container>
      <img src={Logo} alt="Logo" />
      <div>
        <S.LocationBox>
          <MapPin size={24} weight="fill" />
          <p>Brasília, DF</p>
        </S.LocationBox>
        <S.CartButton>
          <ShoppingCart size={24} weight="fill" />
          {itemsInCart > 0 && <span>{itemsInCart}</span>}
        </S.CartButton>
      </div>
    </S.Container>
  )
}
