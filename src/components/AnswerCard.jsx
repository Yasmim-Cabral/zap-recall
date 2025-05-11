import styled from "styled-components";
import wrong from "../assets/icone_erro.png";
import doubt from "../assets/icone_quase.png";
import right from "../assets/icone_certo.png";

function AnswerCard({answer, setCardType, setCorrect, completed, setCompleted}) {
    return (
        <Answer>
            {answer}
            <div>
                <RedButton onClick={() => redButon(setCardType, setCorrect, completed, setCompleted)}>Não lembrei</RedButton>
                <YellowButton onClick={() => yellowButon(setCardType, setCorrect, completed, setCompleted)}>Quase não lembrei</YellowButton>
                <GreenButton onClick={() => greenButon(setCardType, setCorrect, completed, setCompleted)}>Zap!</GreenButton>
            </div>
        </Answer>
    )
}

function finish(setCardType, setCompleted, completed){
    setCardType("QuestionCard");
    setCompleted(completed + 1);
}

function redButon(setCardType, setCorrect, completed, setCompleted){
    setCorrect(wrong);
    finish(setCardType, setCompleted, completed);
}
function yellowButon(setCardType, setCorrect, completed, setCompleted){
    setCorrect(doubt);
    finish(setCardType, setCompleted, completed);
}
function greenButon(setCardType, setCorrect, completed, setCompleted){
    setCorrect(right);
    finish(setCardType, setCompleted, completed);
}

const Answer = styled.div`
max-width: 100%;
min-height: 130px;
background-color:#FFFFD4;
border-radius: 5px;
box-shadow: 0px 4px 5px 0px #00000026;
font-family: "Recursive";
font-size: 18px;
font-weight: 400;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
div{
    display: flex;
    justify-content: space-evenly;
    button{
        height: 38px;
        width: 83px;
        border-radius: 5px;
        border: 0;
        font-family: "Recursive";
        font-size: 12px;
        font-weight: 400;
        color: #FFFFFF;
    }
}
`
const RedButton = styled.button`
background-color: #FF3030;
`
const YellowButton = styled.button`
background-color: #FF922E;
`
const GreenButton = styled.button`
background-color: #2FBE34;
`

export default AnswerCard;