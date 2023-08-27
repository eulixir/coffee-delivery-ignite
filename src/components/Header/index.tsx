import * as S from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [itemsInCart, setItemsInCart] = useState(0)
  const [location, setLocation] = useState('')

  const { cartItems } = useContext(ShoppingCartContext)

  useEffect(() => {
    const totalItemsInCart = cartItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)

    setItemsInCart(totalItemsInCart)
  }, [cartItems])

  useEffect(() => {
    const location = localStorage.getItem('@coffee-shop/location')

    if (location) {
      const parsedLocation = JSON.parse(location)

      const [state, city] = parsedLocation

      setLocation(`${state}, ${city}`)
    }
  }, [])

  return (
    <S.Container>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <div>
        <S.LocationBox>
          <MapPin size={24} weight="fill" />
          <p>{location}</p>
        </S.LocationBox>
        <NavLink to="/checkout" title="checkout">
          <S.CartButton>
            <ShoppingCart size={24} weight="fill" />
            {itemsInCart > 0 && <span>{itemsInCart}</span>}
          </S.CartButton>
        </NavLink>
      </div>
    </S.Container>
  )
}
