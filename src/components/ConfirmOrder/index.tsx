import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CoffeeCheckout } from './CoffeeCheckout'
import * as S from './styles'

export function ConfirmOrder() {
  const { cartItems } = useContext(ShoppingCartContext)
  console.log(cartItems)
  return (
    <S.Container>
      <h2>Cafés Selecionados</h2>
      <S.FinishOrder>
        <S.CoffeeContainer>
          {cartItems.map((item) => (
            <CoffeeCheckout key={item.id} {...item} />
          ))}
        </S.CoffeeContainer>

        <S.Checkout>
          <span>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </span>
          <span>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </span>
          <span>
            <p>Total</p>
            <p>R$ 33,20</p>
          </span>

          <button>
            <p>Confirmar Pedido</p>
          </button>
        </S.Checkout>
      </S.FinishOrder>
    </S.Container>
  )
}
