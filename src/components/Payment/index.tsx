import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import * as S from './styles'

export function Payment() {
  const [active, setActive] = useState('credit')

  function setActiveButton(button: string) {
    setActive(button)
  }
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
          onClick={() => setActiveButton('credit')}
          isActive={active === 'credit'}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </S.PaymentButton>
        <S.PaymentButton
          onClick={() => setActiveButton('debit')}
          isActive={active === 'debit'}
        >
          <Bank size={16} />
          <span>Cartão de Débito</span>
        </S.PaymentButton>
        <S.PaymentButton
          onClick={() => setActiveButton('money')}
          isActive={active === 'money'}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </S.PaymentButton>
      </S.PaymentMethodContainer>
    </S.Container>
  )
}
