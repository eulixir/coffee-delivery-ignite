import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import * as S from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <S.Container>
      <span>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </span>

      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="CEP"
          width={'200px'}
          {...register('cep')}
        />
        <S.Input type="text" placeholder="Rua" {...register('street')} />
        <div style={{ marginBottom: '1rem' }}>
          <S.Input
            type="text"
            placeholder="Número"
            width={'200px'}
            margin={'12px'}
            {...register('number')}
          />
          <S.Input
            type="text"
            placeholder="Complemento"
            width={'348px'}
            {...register('complement')}
          />
        </div>

        <div>
          <S.Input
            type="text"
            placeholder="Bairro"
            width={'200px'}
            margin={'12px'}
            {...register('neighborhood')}
          />
          <S.Input
            type="text"
            placeholder="Cidade"
            width={'276px'}
            margin={'12px'}
            {...register('city')}
          />
          <S.Input
            type="text"
            placeholder="UF"
            width={'60px'}
            {...register('state')}
          />
        </div>
      </S.InputContainer>
    </S.Container>
  )
}
