import { createContext, useState } from 'react'

interface OrderContextType {
  paymentType: string
  location: string[]
  handleChangePaymentType: (type: string) => void
  handleSetLocation: (location: string[]) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderProviderProps {
  children: React.ReactNode
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [paymentType, setPaymentType] = useState('credit-card')
  const [location, setLocation] = useState<string[]>([])

  function handleSetLocation(location: string[]) {
    setLocation(location)

    localStorage.setItem('@coffee-shop/location', JSON.stringify(location))
  }

  function handleChangePaymentType(type: string) {
    setPaymentType(type)
  }

  return (
    <OrderContext.Provider
      value={{
        paymentType,
        handleChangePaymentType,
        handleSetLocation,
        location,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
