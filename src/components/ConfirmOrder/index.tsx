import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { convertToMonetary } from '../../services/convertToMonetary'
import { getCoffee } from '../../services/getCoffee'
import { CoffeeCheckout } from './CoffeeCheckout'
import * as S from './styles'

export function ConfirmOrder() {
  const navigate = useNavigate()
  const { cartItems } = useContext(ShoppingCartContext)

  const orderTotal = cartItems.reduce((acc, item) => {
    const coffe = getCoffee(item.id)!

    return acc + coffe.price * item.quantity
  }, 0)

  const deliveryFee = 3.5

  function handleConfirmOrder() {
    navigate('/order-confirmed')
  }

  return (
    <S.Container>
      <h2>Cafés Selecionados</h2>
      <S.FinishOrder>
        <S.CoffeeContainer>
          {cartItems.map((item, idx) => (
            <>
              <CoffeeCheckout key={item.id} {...item} />
              {idx !== cartItems.length - 1 && <S.Separator>.</S.Separator>}
            </>
          ))}
        </S.CoffeeContainer>

        <S.Checkout>
          <span>
            <p>Total de itens</p>
            <p>R$ {convertToMonetary(orderTotal)}</p>
          </span>
          <span>
            <p>Entrega</p>
            <p>R$ {convertToMonetary(deliveryFee)}</p>
          </span>
          <span>
            <p>Total</p>
            <p>R$ {convertToMonetary(orderTotal + deliveryFee)}</p>
          </span>

          <button onClick={handleConfirmOrder}>
            <p>Confirmar Pedido</p>
          </button>
        </S.Checkout>
      </S.FinishOrder>
    </S.Container>
  )
}
