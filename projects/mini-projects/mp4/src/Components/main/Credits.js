import React from "react";
import { Main, MainTitle, MainContent} from "./Home"

export function Credits(){
    return(
        <Main>
            <MainTitle>Credits</MainTitle>
            <MainContent>
                <p>This profile photo is credited to Rida Naeem under the following Creative Commons License</p>
                {/*<p>This <a href="rida-photo.jpeg" target="_blank">profile photo</a> is credited to Rida Naeem under the following <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons License</a></p>*/}
            </MainContent>
        </Main>
    )
}