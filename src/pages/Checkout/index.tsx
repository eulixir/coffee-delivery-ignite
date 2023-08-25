import { Address } from '../../components/Address'
import { ConfirmOrder } from '../../components/ConfirmOrder'
import { Payment } from '../../components/Payment'
import * as S from './styles'

export function Checkout() {
  return (
    <S.Container>
      <S.FinishOrder>
        <h2>Complete seu pedido</h2>
        <Address />
        <Payment />
      </S.FinishOrder>
      <ConfirmOrder />
    </S.Container>
  )
}
