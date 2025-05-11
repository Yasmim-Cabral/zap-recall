import styled from "styled-components";

function Progress({ completed }) {
  return (
    <Footer>
      {completed}/8 CONCLUÍDOS
    </Footer>
  );
}

const Footer = styled.footer`
height: 70px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
font-family: "Recursive";
font-size: 18px;
font-weight: 400;
color:#333333;
box-shadow: 0px -4px 6px 0px #0000000D;
position: fixed;
bottom: 0;
left: 0;
z-index: 1;
`

export default Progress;