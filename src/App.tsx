import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { Default } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={Default}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
