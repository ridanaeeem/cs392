import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const StyledNav = styled.nav`
  width: 30%;
  background-color: #D0D6B3;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #D0D6B3;
  text-align: center;
  padding-left: 0;
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
`

export function Navigation(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><Link to="">Home</Link></StyledLi>
                <StyledLi><Link to="education">Education</Link></StyledLi>
                <StyledLi><Link to="work">Work</Link></StyledLi>
                <StyledLi><Link to="volunteer">Volunteer</Link></StyledLi>
                <StyledLi><Link to="projects">Projects</Link></StyledLi>
                <StyledLi><Link to="references">References</Link></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}