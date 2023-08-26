import { AddressForm } from '../../components/AddressForm'
import { ConfirmOrder } from '../../components/ConfirmOrder'
import { Payment } from '../../components/Payment'
import * as S from './styles'

export function Checkout() {
  return (
    <S.Container>
      <S.FinishOrder>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <Payment />
      </S.FinishOrder>
      <ConfirmOrder />
    </S.Container>
  )
}
