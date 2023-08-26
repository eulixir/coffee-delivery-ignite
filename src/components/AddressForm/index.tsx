import { MapPinLine } from 'phosphor-react'
import * as S from './styles'

export function AddressForm() {
  return (
    <S.Container>
      <span>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </span>

      <S.FormContainer>
        <S.Input type="text" placeholder="CEP" width={'200px'} />
        <S.Input type="text" placeholder="Rua" />
        <div style={{ marginBottom: '1rem' }}>
          <S.Input
            type="text"
            placeholder="Número"
            width={'200px'}
            margin={'12px'}
          />
          <S.Input type="text" placeholder="Complemento" width={'348px'} />
        </div>

        <div>
          <S.Input
            type="text"
            placeholder="Bairro"
            width={'200px'}
            margin={'12px'}
          />
          <S.Input
            type="text"
            placeholder="Cidade"
            width={'276px'}
            margin={'12px'}
          />
          <S.Input type="text" placeholder="UF" width={'60px'} />
        </div>
      </S.FormContainer>
    </S.Container>
  )
}
