import React from "react";
import LoginView from "../view/loginView";
import {createNewUser, signInUser} from "../integration/firebase/firebaseAuthentication";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userState} from "../model/atoms";

function Login() {
    const navigate = useNavigate();
    const currentUser = useRecoilValue(userState);

    if(currentUser) navigate('/account')

    function logInACB(email, password) {
        try {
            const user = signInUser(email, password);
            console.log(user);
        }catch (error){
            console.log(error);
        }
    }

    function createAccountACB(email, password) {
        try {
            const user = createNewUser(email, password);
            console.log(user);
        }catch (error){
            console.log(error);
        }
    }

    return (
        <LoginView onLogin={logInACB}
                   onCreateAccount={createAccountACB}/>
    )
}
export default Login;