import { useContext } from 'react'
import {
  ShoppingCartContext,
  ShoppingCartItems,
} from '../../../contexts/ShoppingCartContext'
import { convertToMonetary } from '../../../services/convertToMonetary'
import { getCoffee } from '../../../services/getCoffee'
import { Counter } from '../../Counter'
import { Trash } from 'phosphor-react'

import * as S from './styles'

export function CoffeeCheckout({ id, quantity }: ShoppingCartItems) {
  const { image, price, name } = getCoffee(id)!

  const { removeItemFromCart } = useContext(ShoppingCartContext)

  return (
    <S.CoffeeCard>
      <S.CoffeeImage>
        <img src={image} alt={name} />

        <S.CoffeeSummary>
          <p>{name}</p>
          <div>
            <Counter quantity={quantity} id={id} />
            <button onClick={() => removeItemFromCart(id)} type="button">
              <Trash size={16} />
              <span>Remover</span>
            </button>
          </div>
        </S.CoffeeSummary>
      </S.CoffeeImage>

      <p>R$ {convertToMonetary(price * quantity)}</p>
    </S.CoffeeCard>
  )
}
