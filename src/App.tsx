import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { OrderProvider } from './contexts/OrderContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <OrderProvider>
            <Router />
            <GlobalStyles />
          </OrderProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
