import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import * as S from './styles'

interface CounterProps {
  id: number
  quantity?: number
}

export function Counter({ id, quantity }: CounterProps) {
  const { addCoffeeToShoppingCart, removeCoffeeFromShoppingCart } =
    useContext(ShoppingCartContext)

  function countAdd() {
    addCoffeeToShoppingCart(id)
  }

  function countRemove() {
    removeCoffeeFromShoppingCart(id)
  }
  return (
    <S.CounterContainer>
      <button type="button">
        <Minus size={14} weight="bold" onClick={countRemove} />
      </button>
      <p>{quantity || 0}</p>
      <button type="button">
        <Plus size={14} weight="bold" onClick={countAdd} />
      </button>
    </S.CounterContainer>
  )
}
