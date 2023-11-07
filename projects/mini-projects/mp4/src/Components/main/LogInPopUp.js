import React from "react";
import styled from "styled-components";

const LogInGroup = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
`;

const LogInBox = styled.div`
    color: #E4E7D5;
    background-color: rgb(32,73,17,70%);
    padding: 3vh 1vw;
    z-index: -1;
`;

const Alert = styled.div`
    position: absolute;
    color: #E4E7D5;
    background-color: rgb(32,73,17,80%);
    margin-top: 1vh;
    padding: 1vw;
    z-index: -1;
    align-self: start;
    top: 25vh;
`;

export function LogInPopUp({logInZIndex}){

    return(
        <LogInGroup>
            {/* if logInZIndex == True: Z-index = 1 (box visible)
            if logInZIndex == False: Z-index = -1 (box hidden) */}
            
            <LogInBox style={{zIndex: logInZIndex ? '1' : '-1'}}>
                {/* <label for="username">Username: </label>  */}

                <input id="username" type="text"/>

                {/* <label for="password">Password: </label>  */}

                <input id="password" type="text"/>

                {/* <button id="enter-btn" onClick="checkLogIn()">Enter</button>  */}
                <Alert><p></p></Alert>
            </LogInBox>
        </LogInGroup>
    );
}