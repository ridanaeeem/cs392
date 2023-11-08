import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  padding: 1vh 1vw;
  font-size: calc(14px + 1vw);
  background-color: #204911;
  color: #F7F7F7;

  @media screen and (max-width: 750px){
    display: flex;
    justify-content: center;
    padding: 1vh 1vw;
    background-color: #204911;
    color: #F7F7F7;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTagline = styled.p`
  font-size: calc(10px + 1vw);
  margin: auto;
  color: #E4E7D5;
`;

const ButtonArea = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const LogInButton = styled.button`
  background-color: #E4E7D5;
  color: #204911;
  padding: 1vh 1vw;
  margin: 1vh 1vw;
  border-radius: 10px;
  border-color: #657C48;
`;

export function Header({logInClick,disableButton}){
    return(
        <StyledHeader>
            <HeaderContent>
                <h1>Rida Naeem</h1>
                <HeaderTagline>My Online Resume</HeaderTagline>
                <ButtonArea>
                    <LogInButton type="button" onClick={logInClick} disabled={disableButton}>Log In</LogInButton>
                </ButtonArea>
            </HeaderContent>
        </StyledHeader>
    );
}
