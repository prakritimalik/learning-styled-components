import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, IconButton } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/theme'
import Input from './components/Input'
import Card from './components/Card'
import styled from 'styled-components'
import Grid from './components/Grid'
import GlobalStyles from './styles/GlobalStyles.js';
function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const currentTheme = isDark ? darkTheme : lightTheme;
  const GradientBackground = styled.div`
    min-height: 100vh;
    background:  ${props => props.theme.gradients.main};
    padding: 40px;
     transition: background 0.5s ease;
  `

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <GradientBackground>
          <div>
            {/* <Input placeholder="Normal input" />
          <Input $state="error" placeholder="Error input" />
          <Input $state="success" $size="large" placeholder="Success large" />
          <br />
          <Button $size="large">Hey</Button>
          <Button $variant="primary">Primary</Button>
          <IconButton $variant="danger">Delete</IconButton> */}
            <button onClick={() => setIsDark(!isDark)} >
              Toggle
            </button>
            {/* <Card>Hello Glassmorphism!</Card> */}
            <Grid>
              <Card>💰 Revenue: $12,847</Card>
              <Card>👥 Users: 1,247</Card>
              <Card>📈 Growth: +23%</Card>
              <Card>🔄 Conversion: 3.2%</Card>
            </Grid>
          </div>
        </GradientBackground>
      </ThemeProvider >
    </>
  )
}

export default App
