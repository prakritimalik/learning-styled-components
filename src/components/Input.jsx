import styled from 'styled-components';

const Input = styled.input`
border: 2px solid;
border-color: ${props => {
        if (props.$state === 'error') return props.theme.colors.danger;
        if (props.$state === 'success') return props.theme.colors.success;
        return '#ccc'
    }};
border-radius: 4px;
background: transparent;
color: white;
font-size: ${props => {
        if (props.$size === 'small') return props.theme.typography.sm;
        if (props.$size === 'large') return props.theme.typography.lg;
        return props.theme.typography.md;
    }};
    padding: ${props => {
        if (props.$size === 'small') return props.theme.spacing.sm;
        if (props.$size === 'large') return props.theme.spacing.lg;
        return props.theme.spacing.md;
    }};
margin:10px;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
`

export default Input;

