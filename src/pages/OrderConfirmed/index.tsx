import * as S from './styles'
import Bike from '../../assets/motoboy.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function OrderConfirmed() {
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
                  Rua das Margaridas, 110 - Jardim das Flores
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
                <p id="highlight">Cartão de crédito</p>
              </span>
            </S.InfoContainer>
          </div>

          <img src={Bike} alt="" />
        </S.OrderInfo>
      </div>
    </S.Container>
  )
}
