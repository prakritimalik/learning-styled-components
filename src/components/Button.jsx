import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.theme.colors[props.$variant]};
color: white;
padding: ${props => props.$size === 'large' ? '15px 30px' : '10px 20px'};
font-size: ${props => props.$size === 'large' ? '40px' : '16px'}
margin:10px;
`

const IconButton = styled(Button)`
    width: 100px;
    height: 40px;
    padding: 0;
    border-radius: 30%; // Make it circular
`
export { Button, IconButton };
