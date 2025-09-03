const baseTheme = {
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
    },
    typography: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px'
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px'
    }
}

export const lightTheme = {
    ...baseTheme, 
    colors: {
      primary: '#007bff',
      danger: '#dc3545',
      success: '#28a745',
      background: '#ffffff',
      text: '#333333'
    },
    gradients: {
      main: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
    }
}

export const darkTheme = {
    ...baseTheme,
    colors: {
      primary: '#4dabf7',
      danger: '#ff6b6b',
      success: '#51cf66',
      background: '#1a1a1a',
      text: '#ffffff'
    },
    gradients: {
      main: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #000000 100%)'
    }
  }