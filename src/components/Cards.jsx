import Card from "./Card";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import QUESTIONS from "./mock";

function Cards({ completed, setCompleted }) {
   
    return (
        <>
        <HideScrollbarStyles />
        <CardsTable>
            {QUESTIONS.map(({question, answer}, index) => <Card 
            question={question}
            answer={answer} 
            number={index + 1}
            completed={completed}
            setCompleted={setCompleted}
            key={index}/>)}
        </CardsTable>
        </>
    );
}

const CardsTable = styled.div`
max-height: calc(100% - 170px);
width: calc(100% - 80px);
display: flex;
flex-direction: column;
margin-top: 40px;
gap: 23px;
overflow-y: auto;
`
const HideScrollbarStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export default Cards;