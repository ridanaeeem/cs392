import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
  background-color: #204911;
  color: #E4E7D5;
  padding: 2vh 1vw;
`

export function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Rida Naeem | <Link to="credits" style={{color: '#D0D6B3'}}>Credits</Link> &#169;</p>
        </StyledFooter>
    )
}