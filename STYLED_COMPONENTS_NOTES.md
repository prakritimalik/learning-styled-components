# Styled Components Learning Notes

## What is Styled Components?

**Problem it solves:** Traditional CSS has issues with global scope, naming conflicts, dead code elimination, and lack of dynamic styling based on component props.

**Styled Components solution:** CSS-in-JS library that lets you write CSS directly in your JavaScript/React components with full access to props and JavaScript logic.

**Key benefits:**
- Scoped styles (no global CSS conflicts)
- Dynamic styling based on props
- Automatic vendor prefixing
- Dead code elimination
- Theme support built-in
- Server-side rendering support

## Core Concepts to Master

### 1. Basic Syntax

**Traditional CSS:**
```css
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
}
```

**Styled Components:**
```javascript
import styled from 'styled-components'

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px 20px;
`

// Usage
<Button>Click me</Button>
```

**Key differences:**
- CSS goes inside template literals (backticks)
- Creates a React component, not a CSS class
- Automatically generates unique class names

### 2. Props-Based Dynamic Styling

```javascript
const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'gray'};
  color: ${props => props.primary ? 'white' : 'black'};
  padding: ${props => props.size === 'large' ? '15px 30px' : '10px 20px'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

// Usage
<Button primary>Primary Button</Button>
<Button size="large">Large Button</Button>
<Button disabled>Disabled Button</Button>
```

**Patterns:**
- Use template literal interpolation `${props => ...}`
- Ternary operators for boolean props
- Functions for complex logic
- `&` for pseudo-classes (hover, focus, etc.)

### 3. Component Composition & Inheritance

**Extending Components:**
```javascript
const BaseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const PrimaryButton = styled(BaseButton)`
  background: blue;
  color: white;
`

const SecondaryButton = styled(BaseButton)`
  background: transparent;
  color: blue;
  border: 1px solid blue;
`
```

**The `as` prop:**
```javascript
const StyledButton = styled.button`
  /* styles */
`

// Render as different elements
<StyledButton>Button element</StyledButton>
<StyledButton as="a" href="/link">Anchor element</StyledButton>
<StyledButton as={Link} to="/route">React Router Link</StyledButton>
```

### 4. Theme System

**Theme Provider Setup:**
```javascript
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  }
}

// Wrap your app
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

**Using Theme in Components:**
```javascript
const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.medium};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.large};
  }
`
```

### 5. Global Styles

```javascript
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.colors.background};
  }
`

// Usage in App
function App() {
  return (
    <>
      <GlobalStyle />
      <YourComponents />
    </>
  )
}
```

## Patterns We'll Practice

### 1. Reusable Button Component
- Primary, secondary, danger variants
- Size variations (small, medium, large)
- Loading states
- Icon buttons

### 2. Form Components
- Styled inputs with validation states
- Labels and error messages
- Form layouts and spacing

### 3. Layout Components
- Container with max-width and centering
- Flexible grid system
- Card components with shadows and borders

### 4. Complex UI Patterns
- Modal with overlay and positioning
- Navigation with active states
- Responsive layouts

## Performance Considerations

### What Styled Components Does
- Generates unique class names at runtime
- Injects CSS into `<style>` tags in `<head>`
- Re-calculates styles when props change
- Tree-shakes unused styles

### Performance Tips
- Use `shouldForwardProp` to avoid unnecessary DOM props
- Consider CSS prop for one-off styles
- Use theme objects instead of inline style calculations
- Avoid creating styled components inside render functions

### When NOT to use Styled Components
- Large applications with performance constraints
- Teams that prefer separate CSS files
- Projects with existing CSS architecture
- Need for fine-grained CSS control

## Styled Components vs Alternatives

### vs CSS Modules
| Styled Components | CSS Modules |
|------------------|-------------|
| CSS-in-JS | Separate CSS files |
| Dynamic props | Static classes |
| Runtime generation | Build-time |
| Larger bundle | Smaller bundle |
| Theme integration | Manual theme handling |

### vs Emotion
| Styled Components | Emotion |
|------------------|---------|
| Component-first API | CSS prop + styled |
| Larger bundle | Smaller bundle |
| More React-focused | More flexible |
| Better React DevTools | Better performance |

### vs Tailwind CSS
| Styled Components | Tailwind |
|------------------|----------|
| Component-based | Utility-first |
| JavaScript logic | HTML classes |
| Runtime styles | Build-time styles |
| Learning curve: medium | Learning curve: steep |

## Interview Preparation

### Common Questions

**Q: What are styled-components and why use them?**
**A:** CSS-in-JS library that creates React components with encapsulated styles. Benefits include scoped styles, dynamic styling with props, automatic vendor prefixing, and dead code elimination.

**Q: How do you handle dynamic styles?**
**A:** Use template literal interpolation with props: `${props => props.primary ? 'blue' : 'gray'}`. Can use ternary operators, functions, or complex logic.

**Q: What are the performance implications?**
**A:** Runtime CSS generation can impact performance. Styles are recalculated when props change. For high-performance needs, consider CSS modules or static CSS with CSS variables.

**Q: How do you implement themes?**
**A:** Use `ThemeProvider` to wrap your app with theme object, then access with `${props => props.theme.colors.primary}` in styled components.

**Q: How do you handle responsive design?**
**A:** Use media queries in template literals or create responsive helper functions with theme breakpoints.

### Coding Challenges to Practice

1. **Button Component:** Create reusable button with variants (primary, secondary, danger) and sizes
2. **Form Components:** Input with validation states, labels, error messages
3. **Theme Switcher:** Implement dark/light mode toggle
4. **Card Component:** Flexible card with header, content, actions
5. **Modal Component:** Full-screen modal with overlay and animations

## Real-World Usage Patterns

### Component Library Structure
```
src/
  components/
    ui/
      Button/
        Button.jsx
        Button.styles.js
        index.js
      Input/
        Input.jsx
        Input.styles.js
        index.js
    layout/
      Container/
      Grid/
  theme/
    theme.js
    GlobalStyles.js
```

### Design System Integration
- Color palettes and design tokens
- Typography scales
- Spacing and sizing systems
- Component variants and states

---

**Next Steps:** Hands-on building with focused practice session!