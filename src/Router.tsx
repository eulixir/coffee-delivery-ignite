import { Route, Routes } from 'react-router-dom'
import { Checkout } from './components/Checkout'
import { CheckoutFilled } from './components/CheckoutFilled'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-filled" element={<CheckoutFilled />} />
      </Route>
    </Routes>
  )
}
