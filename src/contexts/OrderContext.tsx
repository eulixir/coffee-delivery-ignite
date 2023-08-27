import { createContext, useState } from 'react'

interface OrderContextType {
  handleChangePaymentType: (type: string) => void
  paymentType: string
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderProviderProps {
  children: React.ReactNode
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [paymentType, setPaymentType] = useState('credit-card')

  function handleChangePaymentType(type: string) {
    setPaymentType(type)

    return
  }

  return (
    <OrderContext.Provider value={{ paymentType, handleChangePaymentType }}>
      {children}
    </OrderContext.Provider>
  )
}
