import React from "react";
import LoginView from "../view/loginView";

function Login() {

    function logInACB(email, password) {

    }

    return (
        <LoginView onLogin={logInACB}/>
    )
}
export default Login;