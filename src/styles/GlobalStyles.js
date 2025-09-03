import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  sans-serif;
      color: ${props => props.theme.colors.text};
    }
  `

  export default GlobalStyles;