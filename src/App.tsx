import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
