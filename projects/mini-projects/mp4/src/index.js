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
import { userPass } from './hidden/authData';


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

    // manage login attempts and verification, with a total of three tries to start with 
    const [tries, setTries] = useState(2);
    const disableButton = tries < 0;
    // getting and setting usernames and passwords 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // login status
    const [logInStatus, setLogInStatus] = useState(false);
    // notification status
    const [notification, setNotification] = useState("");
    // verify login
    const checkLogIn = () => {
        // decrement tries each time 
        setTries(tries - 1);
        if ((!disableButton) && (userPass[password] === username)){
            // successful login 
            setLogInStatus(true);
            // hide login box 
            setLogInZIndex(false);
            // makes it so loginbutton will be disabled 
            setTries(0);
            // hide notification
            setNotification("");
        } else if (!disableButton){
            // still have some tries left
            if (tries === 1){
                setNotification("You have " + tries + " try remaining. This is your last attempt");
            } else if (tries === 0) {
                setLogInZIndex(false);
                setNotification("You are out of attempts");
            } else {
                setNotification("You have " + tries + " tries remaining");
            }
        } else {
            // out of tries
            // hide login box 
            setLogInZIndex(false);
            setNotification("You are out of attempts");
        }
    };
    
    return(
        <PageWrapper>
            <BrowserRouter>
                <Header 
                    logInClick={ToggleLogInZIndex} 
                    disableButton={disableButton}
                />
                <Container>
                    <Navigation logInStatus={logInStatus}/>
                    <Routes>
                        {/* need to pass in the following props:
                        logInZIndex = whether or nor login is displayed: true (show) / false (hide)
                        checkLogIn = whether or not login is valid 
                        setUsername = gets what user says their username is
                        setPassword = gets what user says their password is
                        tries = number of tries logging in
                        notifcation = what should be displayed in notification window when logging in attempts fail*/}
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/" element={
                            <Home
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                                setUsername={setUsername} 
                                setPassword={setPassword}
                                tries={tries}
                                notification={notification}
                            />} 
                        />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/education" element={
                            <Education 
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                                setUsername={setUsername} 
                                setPassword={setPassword}
                                tries={tries}
                                notification={notification}
                            />} 
                        />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/work" element={
                            <Work
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                                setUsername={setUsername} 
                                setPassword={setPassword}
                                tries={tries}
                                notification={notification}
                            />}
                        />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/volunteer" element={
                            <Volunteer
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                                setUsername={setUsername} 
                                setPassword={setPassword}
                                tries={tries}
                                notification={notification}
                            />} 
                        />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/projects" element={
                            <Projects
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                                setUsername={setUsername} 
                                setPassword={setPassword}
                                tries={tries}
                                notification={notification}
                            />}   
                        />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/references" element={
                            <References
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                                setUsername={setUsername} 
                                setPassword={setPassword}
                                tries={tries}
                                notification={notification}
                            />}         
                        />
                        <Route path="/ridan/cs392/projects/mini-projects/mp4/build/credits" element={
                            <Credits
                                logInZIndex={logInZIndex}
                                checkLogIn={checkLogIn}
                                setUsername={setUsername} 
                                setPassword={setPassword}
                                tries={tries}
                                notification={notification}
                            />} 
                        />
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