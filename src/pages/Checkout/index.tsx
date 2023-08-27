import { zodResolver } from '@hookform/resolvers/zod'

import { FormProvider, useForm } from 'react-hook-form'
import { AddressForm } from '../../components/AddressForm'
import { ConfirmOrder } from '../../components/ConfirmOrder'
import { Payment } from '../../components/Payment'
import * as zod from 'zod'
import * as S from './styles'
import { OrderContext, OrderProvider } from '../../contexts/OrderContext'
import { useContext, useEffect } from 'react'
import { getCep } from '../../services/getCep'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

const newOrderValidationSchema = zod.object({
  cep: zod.string().min(8, 'Campo obrigatório'),
  street: zod.string().min(1, 'Campo obrigatório'),
  number: zod.string().min(1, 'Campo obrigatório'),
  neighborhood: zod.string().min(1, 'Campo obrigatório'),
  city: zod.string().min(1, 'Campo obrigatório'),
  complement: zod.string().optional(),
  state: zod.string().min(2, 'Campo obrigatório').max(2, 'Campo obrigatório'),
})

export type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      complement: '',
      state: '',
    },
  })

  const { watch, handleSubmit, reset } = newOrderForm

  const cep = watch('cep')

  useEffect(() => {
    if (cep?.length === 8) {
      setAddress()
    }
  }, [cep])

  const { paymentType } = useContext(OrderContext)
  const { clearShoppingCart } = useContext(ShoppingCartContext)

  const navigate = useNavigate()

  function handleCreateOrder(data: NewOrderFormData) {
    console.log(paymentType)

    localStorage.setItem(
      '@coffee-shop/order',
      JSON.stringify({ data, paymentType })
    )

    clearShoppingCart()

    navigate('/order-confirmed')

    reset()
    return
  }

  async function setAddress() {
    const address = await getCep(cep)

    if (!address) {
      return
    }

    newOrderForm.setValue('street', address.street)
    newOrderForm.setValue('neighborhood', address.neighborhood)
    newOrderForm.setValue('city', address.city)
    newOrderForm.setValue('state', address.state)
    newOrderForm.setValue('complement', address.complement)
  }

  return (
    <S.Container onSubmit={handleSubmit(handleCreateOrder)}>
      <OrderProvider>
        <FormProvider {...newOrderForm}>
          <S.FinishOrder>
            <h2>Complete seu pedido</h2>
            <AddressForm />
            <Payment />
          </S.FinishOrder>
          <ConfirmOrder />
        </FormProvider>
      </OrderProvider>
    </S.Container>
  )
}
