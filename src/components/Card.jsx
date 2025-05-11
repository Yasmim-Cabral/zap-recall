import QuestionCard from "./QuestionCard";
import OpenCard from "./OpenCard";
import AnswerCard from "./AnswerCard";
import { useState } from "react";
import play from "../assets/seta_play.png";

function Card({ question, answer, number, completed, setCompleted}) {

    const [cardType, setCardType] = useState("QuestionCard");
    const [correct, setCorrect] = useState(play);

    return (
        <>
            {(cardType === "QuestionCard" ? <QuestionCard number={number} setCardType={setCardType} correct={correct}  /> : "")}

            {(cardType === "OpenCard" ? <OpenCard question={question} setCardType={setCardType}/>: "")}

            {(cardType === "AnswerCard" ? <AnswerCard answer={answer} setCardType={setCardType} setCorrect={setCorrect} completed={completed} setCompleted={setCompleted}/>: "")}
        </>
    );
}

export default Card;