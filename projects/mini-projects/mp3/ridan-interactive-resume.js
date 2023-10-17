const userPass = {
    "e":"e",
    "hello123": "ridan",
    "tboy123": "jeffrey",
    "100sleep": "pierce",
    "h1gh":"arctic",
    "d0ldrum":"boy",
    "d1vide":"chemical",
    "myl0ve":"mitski"
};

// make log in box appear if it is not there, and if it is there make it disappear
let vis = false;
function logIn(){
    if (vis===false){
        document.getElementById("log-in-box").style.zIndex = "1";
        vis=true;
    } else {
        document.getElementById("log-in-box").style.zIndex = "-1";
        vis=false;
    }
}

// the user only gets 3 attempts to login correctly
let numberOfTries = 3;
// check to see if the user has entered the correct login information
function checkLogIn(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    numberOfTries -= 1;

    // correct username and password
    if(numberOfTries >= 0 && userPass[pass] === user) {
        // close login box and hide any alerts after successful login
        logIn();
        document.getElementById("alert").style.zIndex = "-1";
        // disable login button, it is no longer needed
        document.getElementById("log-in-btn").removeAttribute("onclick");
        document.getElementById("log-in-btn").setAttribute("onclick","");
        // show hidden tabs (stored in secretTabs)
        let secretTabs = document.getElementsByClassName("secret");
        for (let i = 0; i < secretTabs.length; i++) {
            secretTabs[i].style.display = "block";
        }
    // incorrect username and password, no more attempts
    } else if (numberOfTries <= 0){
        console.log("die");
        window.close();
    // incorrect username and password, one more attempt
    } else if (numberOfTries === 1 && !(userPass[pass] === user)){
        document.getElementById("alert").innerHTML = `You have <strong class="emphasized">1</strong> try remaining. This is your <strong class="emphasized">last attempt</strong>.`;
        document.getElementById("alert").style.zIndex = "1";
        // incorrect username and password, more than one attempt left
    } else{
        document.getElementById("alert").innerHTML = `You have <strong class="emphasized">${numberOfTries}</strong> tries remaining.`
        document.getElementById("alert").style.zIndex = "1";
    }
}