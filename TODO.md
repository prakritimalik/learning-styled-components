# Styled Components Learning Path

## Core Fundamentals (Day 1 - 3 hours)

### 1. Setup & Basic Syntax
- [x] Install styled-components and setup
- [x] Basic styled component creation (`styled.div`, `styled.button`)
- [x] Template literals and CSS syntax
- [x] Replacing CSS files with styled components

### 2. Props-Based Styling
- [x] Dynamic styling with props (`${props => props.primary ? 'blue' : 'gray'}`)
- [x] Boolean props and conditional styling
- [x] Complex prop-based logic (variant and size props)
- [x] Transient props ($) to avoid DOM warnings
- [ ] TypeScript props (if using TS)

### 3. Component Composition
- [x] Extending styled components (`styled(BaseComponent)`)
- [x] Component inheritance and override patterns
- [x] Named exports for multiple components from one file
- [ ] The `as` prop for semantic flexibility
- [ ] Composition vs inheritance patterns

## Production-Ready Patterns (Day 2 - 2 hours)

### 4. Theme System
- [x] ThemeProvider setup and global themes
- [x] Accessing theme in styled components
- [x] Design system tokens (colors, spacing, typography)
- [ ] Dark/light mode implementation

### 5. Advanced Styling Patterns
- [ ] CSS helper functions and mixins
- [ ] Animation and keyframes (`keyframes` from styled-components)
- [ ] Media queries and responsive design
- [ ] Pseudo-classes and pseudo-elements

### 6. Global Styles & Architecture
- [ ] createGlobalStyle for app-wide styles
- [ ] CSS reset and normalize patterns
- [ ] Component library architecture
- [ ] File organization best practices

## Performance & Production (Day 3 - 2 hours)

### 7. Performance Optimization
- [ ] Understanding CSS-in-JS runtime cost
- [ ] When to use `shouldForwardProp`
- [ ] Avoiding unnecessary re-renders
- [ ] CSS prop vs styled components performance

### 8. Real-World Component Library
- [ ] Reusable Button component with variants
- [ ] Form components (Input, Select, Checkbox)
- [ ] Layout components (Container, Grid, Flex)
- [ ] Complex components (Modal, Dropdown, Tooltip)

### 9. Testing & Debugging
- [ ] Testing styled components with Jest/RTL
- [ ] Debugging styled-components in DevTools
- [ ] Snapshot testing for styles
- [ ] Visual regression testing considerations

## Advanced Concepts (Future)

### 10. Server-Side Rendering
- [ ] SSR with styled-components (Next.js integration)
- [ ] Hydration considerations
- [ ] Critical CSS extraction

### 11. Migration Strategies
- [ ] Migrating from CSS/SCSS to styled-components
- [ ] Coexistence with other styling solutions
- [ ] Incremental adoption patterns

### 12. Ecosystem & Alternatives
- [ ] Emotion vs styled-components comparison
- [ ] When to choose CSS-in-JS vs CSS modules
- [ ] Tailwind CSS + styled-components hybrid approach

## Interview Topics to Master

### Technical Questions
- [ ] "What are the pros/cons of CSS-in-JS?"
- [ ] "How do you handle theming in styled-components?"
- [ ] "Performance implications of runtime styles?"
- [ ] "How do you test styled components?"

### Coding Challenges
- [ ] "Build a responsive Button component with variants"
- [ ] "Implement a theme switcher"
- [ ] "Create a reusable Card component"
- [ ] "Build a form with styled components"

### Architecture Questions
- [ ] "How do you organize styled components in a large app?"
- [ ] "When would you not use styled-components?"
- [ ] "How do you handle global styles?"

---

**Current Focus:** Start with fundamentals and build a solid component library that demonstrates real-world patterns.