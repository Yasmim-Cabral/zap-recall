import styled from "styled-components";
import play from "../assets/seta_play.png"
import wrong from "../assets/icone_erro.png";
import doubt from "../assets/icone_quase.png";
import right from "../assets/icone_certo.png";

function QuestionCard({number, setCardType, correct}) {
    return (
        <Question $correct={correct}>
            Pergunta {number}
            <img src={correct} onClick={() => {correct === play ? setCardType("OpenCard") : ""}} />
        </Question>
    );
}

const Question = styled.div`
max-width: 100%;
min-height: 65px;
background-color: #ffffff;
border-radius: 5px;
box-shadow: 0px 4px 5px 0px #00000026;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;
font-family: "Recursive";
font-size: 16px;
font-weight: 700;
text-decoration: ${props => (props.$correct === play ? "none" : "line-through")};
color: ${props => (props.$correct === right ? "#2FBE34" : "#333333")};
color: ${props => (props.$correct === doubt ? "#FF922E" : "")};
color: ${props => (props.$correct === wrong ? "#FF3030" : "")};
`

export default QuestionCard;