import styled from "styled-components";
import Cards from "./Cards";
import Progress from "./Progress";
import logo from "../assets/logo.png"
import { useState } from "react";

function ZapInterface() {

    const [completed, setCompleted] = useState(0);

    return (
        <Interface>
            <Header>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </Header>

            <Cards completed={completed} setCompleted={setCompleted} />
            <Progress completed={completed} />
        </Interface>
    );
}

const Header = styled.header`
    display: flex;
    align-items: center;
    margin-top: 45px;
    h1{
        font-family: "Righteous";
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
        padding-left: 20px;
    }
    img{
        height: 60px;
    }
`

const Interface = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;
`

export default ZapInterface;