import { ShoppingCartItems } from '../../../contexts/ShoppingCartContext'
import { convertToMonetary } from '../../../services/convertToMonetary'
import { getCoffee } from '../../../services/getCoffee'

import * as S from './styles'

export function CoffeeCheckout({ id, quantity }: ShoppingCartItems) {
  const coffe = getCoffee(id)!

  return (
    <S.CoffeCard>
      <div>
        <S.CoffeImage>
          <img src={coffe.image} alt={coffe.name} />

          <div>
            <p>{coffe.name}</p>
          </div>
        </S.CoffeImage>

        <p>R$ {convertToMonetary(coffe.price * quantity)}</p>
      </div>
      <div></div>
    </S.CoffeCard>
  )
}
