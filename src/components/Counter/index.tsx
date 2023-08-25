import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

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
    <>
      <button>
        <Minus size={14} weight="bold" onClick={countRemove} />
      </button>
      <p>{quantity || 0}</p>
      <button>
        <Plus size={14} weight="bold" onClick={countAdd} />
      </button>
    </>
  )
}
