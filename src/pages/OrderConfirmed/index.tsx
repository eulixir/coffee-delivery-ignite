import * as S from './styles'
import Bike from '../../assets/motoboy.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { useEffect, useState } from 'react'

type Order = {
  data?: {
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    complement: string
    state: string
  }
  paymentType?: string
}
export function OrderConfirmed() {
  const [order, setOrder] = useState<Order>({})

  function getOrder() {
    const data = JSON.parse(localStorage.getItem('@coffee-shop/order') || '{}')

    return data
  }

  const paymentType = paymentMapper(order.paymentType ? order.paymentType : '')

  function paymentMapper(paymentType: string) {
    switch (paymentType) {
      case 'credit-card':
        return 'Cartão de Crédito'
      case 'debit-card':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'
      default:
        return ''
    }
  }

  useEffect(() => {
    const order = getOrder()

    setOrder(order)
  }, [])

  return (
    <S.Container>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <S.OrderInfo>
          <div>
            <S.InfoContainer>
              <div id="map">
                <MapPin size={16} weight="fill" />
              </div>

              <span>
                <p>Endereço em</p>
                <p id="highlight">
                  {order.data?.street}, {order.data?.number} -{' '}
                  {order.data?.neighborhood}, {order.data?.city} -{' '}
                  {order.data?.state}
                </p>
              </span>
            </S.InfoContainer>
            <S.InfoContainer>
              <div id="timer">
                <Timer size={16} weight="fill" />
              </div>
              <span>
                <p>Previsão de entrega</p>
                <p id="highlight">10 min</p>
              </span>
            </S.InfoContainer>
            <S.InfoContainer>
              <div id="dollar">
                <CurrencyDollar size={16} weight="fill" />
              </div>
              <span>
                <p>Forma de pagamento</p>
                <p id="highlight">{paymentType}</p>
              </span>
            </S.InfoContainer>
          </div>

          <img src={Bike} alt="" />
        </S.OrderInfo>
      </div>
    </S.Container>
  )
}
