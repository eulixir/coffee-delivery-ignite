import { createContext, useEffect, useState } from 'react'

interface ShoppingCartContextData {
  cartItems: ShoppingCartItems[]
  addCoffeeToShoppingCart: (id: number) => void
  removeCoffeeFromShoppingCart: (id: number) => void
  removeItemFromCart: (id: number) => void
  clearShoppingCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

export interface ShoppingCartItems {
  id: number
  quantity: number
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, SetCartItems] = useState<ShoppingCartItems[]>(
    getItemsFromLocalStorage()
  )

  function addCoffeeToShoppingCart(id: number) {
    const coffeeAlreadyExists = cartItems.some((item) => item.id === id)

    if (coffeeAlreadyExists) {
      const updatedShoppingCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )

      SetCartItems(updatedShoppingCartItems)
    } else {
      SetCartItems([...cartItems, { id, quantity: 1 }])
    }
  }

  function clearShoppingCart() {
    SetCartItems([])
  }

  function removeCoffeeFromShoppingCart(id: number) {
    const updatedShoppingCartItems = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)

    SetCartItems(updatedShoppingCartItems)
  }

  function getItemsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('@coffee-shop/cartItems')!) || []
  }

  function removeItemFromCart(id: number) {
    const updatedShoppingCartItems = cartItems.filter((item) => item.id !== id)

    SetCartItems(updatedShoppingCartItems)
  }

  useEffect(() => {
    localStorage.setItem('@coffee-shop/cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addCoffeeToShoppingCart,
        removeCoffeeFromShoppingCart,
        removeItemFromCart,
        clearShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
