import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import * as S from './styles'

export function Payment() {
  const { paymentType, handleChangePaymentType } = useContext(OrderContext)

  return (
    <S.Container>
      <span>
        <CurrencyDollar size={22} />
        <div>
          <h3>Forma de Pagamento</h3>
          <p>Informe a forma de pagamento</p>
        </div>
      </span>
      <S.PaymentMethodContainer>
        <S.PaymentButton
          type="button"
          onClick={() => handleChangePaymentType('credit-card')}
          isActive={paymentType === 'credit-card'}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </S.PaymentButton>
        <S.PaymentButton
          type="button"
          onClick={() => handleChangePaymentType('debit-card')}
          isActive={paymentType === 'debit-card'}
        >
          <Bank size={16} />
          <span>Cartão de Débito</span>
        </S.PaymentButton>
        <S.PaymentButton
          type="button"
          onClick={() => handleChangePaymentType('money')}
          isActive={paymentType === 'money'}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </S.PaymentButton>
      </S.PaymentMethodContainer>
    </S.Container>
  )
}
