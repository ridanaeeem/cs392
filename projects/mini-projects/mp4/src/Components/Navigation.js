import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const StyledNav = styled.nav`
  width: 30%;
  background-color: #D0D6B3;

  @media screen and (max-width: 750px){
    width: 100%;
  }
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #D0D6B3;
  text-align: center;
  padding-left: 0;

  @media screen and (max-width: 750px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-left: 0;
  }
`

const StyledLi = styled.li`
  font-size: calc(8px + 2vw);
  /*width of "buttons"*/
  width: 90%;
  background-color: #E4E7D5;
  /*"button" size*/
  padding: 1vh 2vw;
  /*distance between "buttons"*/
  margin: 2vh auto;
  border: 5px inset #AAAE7F;
  list-style-type: none;

  @media screen and (max-width: 750px){
    font-size: calc(2px + 2vw);
    background-color: #E4E7D5;
    padding: 1% 0%;
    margin: 1vh auto;
    border: 3px inset #AAAE7F;
    list-style-type: none
  }
`

export function Navigation(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><Link to="/ridan/cs392/projects/mini-projects/mp4/build">Home</Link></StyledLi>
                <StyledLi><Link to="/ridan/cs392/projects/mini-projects/mp4/build/education">Education</Link></StyledLi>
                <StyledLi><Link to="/ridan/cs392/projects/mini-projects/mp4/build/work">Work</Link></StyledLi>
                <StyledLi><Link to="/ridan/cs392/projects/mini-projects/mp4/build/volunteer">Volunteer</Link></StyledLi>
                <StyledLi><Link to="/ridan/cs392/projects/mini-projects/mp4/build/projects">Projects</Link></StyledLi>
                <StyledLi><Link to="/ridan/cs392/projects/mini-projects/mp4/build/references">References</Link></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}