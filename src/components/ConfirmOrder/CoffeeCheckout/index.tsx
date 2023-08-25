import { ShoppingCartItems } from '../../../contexts/ShoppingCartContext'
import { coffees } from '../../../services/listCoffees'
import * as S from './styles'

export function CoffeeCheckout({ id, quantity }: ShoppingCartItems) {
  const coffe = coffees.find((coffee) => coffee.id === id)

  return (
    <S.CoffeCard>
      <div>
        <div>
          <div>
            <img src={coffe!.image} alt={coffe!.name} />
          </div>
          <div>
            <p>{coffe!.name}</p>
          </div>
        </div>

        <p>R$ {coffe!.price * quantity}</p>
      </div>
    </S.CoffeCard>
  )
}
