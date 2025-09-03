import styled, { keyframes } from "styled-components";

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  `


const Card = styled.div`
backdrop-filter: blur(10px);
background: rgba(255,255,255,0.1);
border: 1px solid rgba(255,255,255,0.2);
box-shadow: 0 8px 32px rgba(0,0,0,0.1);
 border-radius: 16px;
    padding: 24px;
    margin: 16px;
 transition: all 0.3s ease;
    cursor: pointer;
        animation: ${float} 3s ease-in-out infinite;
    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }
`


export default Card;