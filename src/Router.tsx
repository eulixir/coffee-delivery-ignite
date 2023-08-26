import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { OrderConfirmed } from './pages/OrderConfirmed'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
