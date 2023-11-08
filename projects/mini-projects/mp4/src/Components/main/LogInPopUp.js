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

    @media screen and (max-width: 750px){
        top: 6vh;
        padding: 4vh 2vw;
    }
`;

const EnterButton = styled.button`
    background-color: #E4E7D5;
    color: #204911;
    padding: 1vh 3vw;
    margin: 1vh auto;
    border-radius: 10px;
    border-color: #657C48;
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

export function LogInPopUp({logInZIndex, checkLogIn, setUsername, setPassword, tries, notification}){
    return(
        <LogInGroup>
            {/* if logInZIndex == True: Z-index = 1 (box visible)
            if logInZIndex == False: Z-index = -1 (box hidden) */}

            <LogInBox style={{zIndex: logInZIndex ? '1' : '-1'}}>
                <label for="username" >Username: </label> 
                <br></br>
                <input 
                    type="text" 
                    // event handler for typing in username updates username value 
                    onChange={(e) => setUsername(e.target.value)}

                />
                <br></br>
                <label for="password">Password: </label> 
                <br></br>
                <input 
                    type="text"
                    // event handler for typing in password updates password value 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <EnterButton onClick={checkLogIn}>Enter</EnterButton> 
            </LogInBox>
            <Alert style={{zIndex: (notification === "") ? '-1' : '1'}}>
                <strong> {notification} </strong>
            </Alert>
        </LogInGroup>
    );
}