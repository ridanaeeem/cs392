import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/main/Home';
import { Education } from './components/main/Education';
import { Work } from './components/main/Work';
import { Volunteer } from './components/main/Volunteer';
import { Projects } from './components/main/Projects';
import { References } from './components/main/References';
import { Credits } from './components/main/Credits';
import UserPass from './hidden/authData';


const PageWrapper = styled.div`
    width: 80vw;
    margin: auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  @media screen and (max-width: 750px){
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;


export function App(){
    // control visibility of the login box 
    // to begin with, logInZIndex = false
    const [logInZIndex, setLogInZIndex] = useState(false);

    // when the login button is clicked, change z-index
    // changes z-index from t/1 --> f/-1 or f/-1 --> t/1
    // false = hide box = z-index: -1, true = show box = z-index: 1
    const ToggleLogInZIndex = () => {
        setLogInZIndex(!logInZIndex);
    };

    // manage attempts and verification, with three tries to start with 
    const [tries, setTries] = useState(3);

    const checkLogIn = (username, password) => {
        setTries(tries - 1);

        
    };

    
    
    return(
        <PageWrapper>
            <BrowserRouter>
                <Header logInClick={ToggleLogInZIndex} />
                <Container>
                    <Navigation/>
                    <Routes>
                        {/* need to pass in the following props:
                        logInZIndex = whether or nor login is displayed: true (show) / false (hide)
                        checkLogIn = whether or not login is valid */}
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/" element={
                            <Home
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                            />} 
                        />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/education" element={<Education/>} />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/work" element={<Work/>} />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/volunteer" element={<Volunteer/>} />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/projects" element={<Projects/>} />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/references" element={<References/>} />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/credits" element={<Credits/>} />
                    </Routes>
                </Container>
                <Footer>
                </Footer>
            </BrowserRouter>
        </PageWrapper>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);