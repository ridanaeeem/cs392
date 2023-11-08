import React from "react";
import styled from "styled-components";
import { Main, MainTitle } from "./Home"
import { LogInPopUp } from "./LogInPopUp";

const RefTable = styled.table`
  align-self: center;
  background-color: #E4E7D5;
  color: #204911;
  margin: 2vh 0 1vh 0
`

const TableHeading = styled.th`
  font-size: calc(10px + 2vh);
  padding: 2vh 1vw;
  border: double 1px;
  background-color: #D0D6B3;
`

const EvenRowItem = styled.td`
  padding: 2vh 1vw;
  border: double 1px;
  font-size: calc(10px + 1vw);
`

const OddRowItem = styled.td`
  padding: 2vh 1vw;
  border: double 1px;
  font-size: calc(10px + 1vw);
  background-color: #D0D6B3;
`

export function References({logInZIndex, checkLogIn, setUsername, setPassword, tries, notification}){
    return (
        <Main>
            <LogInPopUp 
                logInZIndex={logInZIndex} 
                checkLogIn={checkLogIn}
                setUsername={setUsername} 
                setPassword={setPassword}
                tries={tries}
                notification={notification}
            />
            <MainTitle>References</MainTitle>
            <RefTable>
                <tr>
                    <TableHeading>Name</TableHeading>
                    <TableHeading>Position</TableHeading>
                    <TableHeading>Contact</TableHeading>
                </tr>
                <tr>
                    <EvenRowItem>Kaylee</EvenRowItem>
                    <EvenRowItem>Manager at Pickering Library</EvenRowItem>
                    <EvenRowItem>kanzi@bu.edu</EvenRowItem>
                </tr>
                <tr>
                    <OddRowItem>Erin</OddRowItem>
                    <OddRowItem>Manager at Casey Cares Foundation</OddRowItem>
                    <OddRowItem>erinritt@caseycares.org</OddRowItem>
                </tr>
                <tr>
                    <EvenRowItem>Haneen</EvenRowItem>
                    <EvenRowItem>Assistant Manager at Educational Resources Center</EvenRowItem>
                    <EvenRowItem>erctutor@bu.edu</EvenRowItem>
                </tr>
                <tr>
                    <OddRowItem>Jeffrey</OddRowItem>
                    <OddRowItem>Colleague</OddRowItem>
                    <OddRowItem>jting@bu.edu</OddRowItem>
                </tr>
            </RefTable>
        </Main>
    )
}