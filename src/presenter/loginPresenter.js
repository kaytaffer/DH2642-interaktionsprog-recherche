import React from "react";
import LoginView from "../view/loginView";
import {signInUser} from "../integration/firebase/firebaseAuthentication";

function Login() {

    function logInACB(email, password) {
        try {
            const user = signInUser(email, password);
            console.log(user);
        }catch (error){
            console.log(error);
        }
    }

    return (
        <LoginView onLogin={logInACB}/>
    )
}
export default Login;