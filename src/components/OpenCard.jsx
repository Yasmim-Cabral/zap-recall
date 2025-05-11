import styled from "styled-components";
import swap from "../assets/seta_virar.png"

function OpenCard({question, setCardType}) {
    return (
        <Open>
            {question}
            <img src={swap} onClick={() => setCardType("AnswerCard")} />
        </Open>
    );
}

const Open = styled.div`
max-width: 100%;
min-height: 130px;
background-color:#FFFFD4;
border-radius: 5px;
box-shadow: 0px 4px 5px 0px #00000026;
font-family: "Recursive";
font-size: 18px;
font-weight: 400;
padding: 10px;
position: relative;
img{
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 30px;
}
`
export default OpenCard;