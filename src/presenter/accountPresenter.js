import React from "react";
import AccountView from "../view/accountView";
import {useRecoilValue} from "recoil";
import {userEmailState, userIdState, userDisplayNameState, userState} from "../model/atoms";
import {
    createNewUser,
    setUserDisplayName,
    signInUser,
    signOutUser
} from "../integration/firebase/firebaseAuthentication";
import LoginView from "../view/loginView";
import {mostRechercheWordState} from "../model/persistenceAtoms";

function Account() {
    const currentUser = useRecoilValue(userState);
    const currentUserId = useRecoilValue(userIdState);
    const currentUserEmail = useRecoilValue(userEmailState);
    const currentUserNickname = useRecoilValue(userDisplayNameState);
    const bestWord = useRecoilValue(mostRechercheWordState(currentUserId))

    function logInACB(email, password) {
        try {
            signInUser(email, password);
        }catch (error){ console.log(error);}
    }

    function createAccountACB(name, email, password) {
        try { createNewUser(name, email, password);
        }catch (error){ console.log(error);}
    }

    function changeDisplayNameACB(name) {
        setUserDisplayName(name)
    }

    return ( <div>
        {currentUser &&<AccountView userId={currentUserId}
                                    userEmail={currentUserEmail}
                                    userDisplayName={currentUserNickname}
                                    onChangeDisplayName={changeDisplayNameACB}
                                    bestWord = {bestWord}
                                    onSignOut={signOutUser}/>}
        {!currentUser && <LoginView onLogin={logInACB}
                                    onCreateAccount={createAccountACB}/>}
    </div>)
}
export default Account;