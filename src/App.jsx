import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, IconButton} from './components/Button'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Button $size="large">Hey</Button>
          <Button $variant="primary">Primary</Button>
          <IconButton $variant="danger">Delete</IconButton>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
