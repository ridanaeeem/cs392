import React from "react";
import styled from "styled-components";
import photo from "../../media/rida-photo.jpeg";
import { LogInPopUp } from "./LogInPopUp";

export const Main =  styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #E4E7D5;
  padding: 3vh 3vw;
  color: #204911;

  @media screen and (max-width: 750px){
    width: 100%;
  }
`;

export const MainTitle = styled.h3`
  margin: 1vw 1vh;
  text-align: center;
  font-size: calc(14px + 3vw);
  color: #204911;
  background-color: #D0D6B3;
  border: dashed 1px;
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2vh 2vw;

  @media screen and (max-width: 750px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1vh 0vw;
  }
`;

export const MainText = styled.div`
  align-self: center;
  width: 100%;
  margin: 1vh 1vw;
  font-size: calc(8px + 2vh);
  color: #204911;
`;

const HomeDescription = styled.div`
  align-self: center;
  width: 60%;
  margin: 1vh 2vw;
  font-size: calc(8px + 2vh);
  color: #204911;

  @media screen and (max-width: 750px){
    align-self: center;
    width: 100%;
  }
`;

const HomeImage = styled.img`
  width: 50%;
  margin: 1vh auto;

  @media screen and (max-width: 750px){
    width: 50%;
    margin: 1vh auto;
  }
`;

export function Home({logInZIndex, checkLogIn}){
  
  return (
      <Main>
          <LogInPopUp 
            logInZIndex={logInZIndex} 
            checkLogIn={checkLogIn}
          />
          <MainTitle>Home</MainTitle>

          <MainContent>
              <HomeImage src={photo} alt="Rida Naeem"/>
              <HomeDescription>
                  <p>My name is Rida Naeem and I am a senior at Boston University. I am majoring in Neuroscience and minoring in
                      Computer Science and am planning to graduate in May 2024. </p>
              </HomeDescription>
          </MainContent>
          <MainText>
              <p>I am interested in pursuing a career in the field of computational neuroscience in the future,
                  and I currently hope to gain more experience manipulating data and working with various biological models.
                  On this website, I have laid out my education, work, and volunteer experiences, as well as some references
                  from prior jobs.</p>
          </MainText>
      </Main>
  );
}