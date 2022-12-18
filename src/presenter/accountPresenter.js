import React from "react";
import AccountView from "../view/accountView";
import {useRecoilValue} from "recoil";
import {userIdState, userState} from "../model/atoms";
import {createNewUser, signInUser, signOutUser} from "../integration/firebase/firebaseAuthentication";
import LoginView from "../view/loginView";

function Account() {
    const currentUser = useRecoilValue(userState);
    const currentUserId = useRecoilValue(userIdState);


    function logInACB(email, password) {
        try {
            const user = signInUser(email, password);
            console.log(user);
        }catch (error){ console.log(error);}
    }

    function createAccountACB(email, password) {
        try {
            const user = createNewUser(email, password);
            console.log(user);
        }catch (error){ console.log(error);}
    }

    return ( <div>
        {currentUser &&<AccountView userId={currentUserId}
                                    onSignOut={signOutUser}/>}
        {!currentUser && <LoginView onLogin={logInACB}
                                    onCreateAccount={createAccountACB}/>}
    </div>)
}
export default Account;