import React from "react";
import { Main, MainTitle, MainContent} from "./Home"
import { LogInPopUp } from "./LogInPopUp";
import {Link} from "react-router-dom";

export function Credits({logInZIndex, checkLogIn, setUsername, setPassword, tries, notification}){
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
            <MainTitle>Credits</MainTitle>
            <MainContent>
                <p>This <Link to={require("../../media/rida-photo.jpeg")} target="_blank">profile photo</Link> is credited to Rida Naeem 
                under the following <Link to="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons License</Link></p>
                {/*<p>This <a href="rida-photo.jpeg" target="_blank">profile photo</a> is credited to Rida Naeem under the following <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons License</a></p>*/}
            </MainContent>
        </Main>
    )
}