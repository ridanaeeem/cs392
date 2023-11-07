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


const PageWrapper = styled.div`
    width: 80vw;
    margin: auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;


export function App(){
    // to begin with, logInZIndex = false
    const [logInZIndex, setLogInZIndex] = useState(false);

    // when the login button is clicked, change z-index
    // changes z-index from t/1 --> f/-1 or f/-1 --> t/1
    // false = hide box = z-index: -1, true = show box = z-index: 1
    const ToggleLogInZIndex = () => {
        setLogInZIndex(!logInZIndex);
    };
    
    return(
        <PageWrapper>
            <BrowserRouter>
                <Header logInClick={ToggleLogInZIndex} />
                <Container>
                    <Navigation/>
                    <Routes>
                        {/* need to pass in logInZIndex as a prop to each main component  */}
                        <Route path="" element={
                            <Home
                                logInZIndex={logInZIndex}
                            />} 
                        />
                        <Route path="education" element={<Education/>} />
                        <Route path="work" element={<Work/>} />
                        <Route path="volunteer" element={<Volunteer/>} />
                        <Route path="projects" element={<Projects/>} />
                        <Route path="references" element={<References/>} />
                        <Route path="credits" element={<Credits/>} />
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