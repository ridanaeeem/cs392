import React from "react";
import styled from "styled-components";
import { Main, MainTitle, MainText } from "./Home"
import { LogInPopUp } from "./LogInPopUp";

export const StyledList = styled.li`
  font-size: calc(6px + 2vh);
  margin-top: 1vh;
`

export const Subheading = styled.p`
  color: #657C48;
  font-size: calc(10px + 2vh);
  margin-top: 2vh;
`
export function Education({logInZIndex, checkLogIn, setUsername, setPassword, tries, notification}){
    return(
        <Main>
            <LogInPopUp 
                logInZIndex={logInZIndex} 
                checkLogIn={checkLogIn}
                setUsername={setUsername} 
                setPassword={setPassword}
                tries={tries}
                notification={notification}
            />
            <MainTitle>Education</MainTitle>
            <MainText>
                <Subheading><strong>Currently Pursuing</strong></Subheading>
                <ul id="degree-box">
                    <StyledList>B.A. in Neuroscience, Minor in Computer Science | Boston University, MA | May 2024</StyledList>
                </ul>
                <Subheading><strong>Relevant Coursework</strong></Subheading>
                <ul>
                    <StyledList>Principles of Neuroscience</StyledList>
                    <StyledList>MATLAB Programming for Research in Psychological & Brain Sciences</StyledList>
                    <StyledList>Computational Models of Brain and Behavior</StyledList>
                    <StyledList>Principles and Methods of Cognitive and Neural Modeling</StyledList>
                    <StyledList>Discrete Mathematics</StyledList>
                    <StyledList>Linear Algebra</StyledList>
                    <StyledList>Multivariate Calculus</StyledList>
                    <StyledList>Differential Equations</StyledList>
                    <StyledList>Cellular and Molecular Biology</StyledList>
                    <StyledList>General Chemistry</StyledList>
                    <StyledList>Organic Chemistry</StyledList>
                </ul>
            </MainText>
        </Main>
    )
}