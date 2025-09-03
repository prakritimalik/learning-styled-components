import styled from "styled-components";

const Grid = styled.div`
 display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${props => props.theme.spacing.lg};
      
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }
`

export default Grid;