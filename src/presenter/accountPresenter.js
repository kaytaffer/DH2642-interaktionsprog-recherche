import React, {useState} from "react";
import AccountView from "../view/accountView";
import {useRecoilValue} from "recoil";
import {userEmailState, userIdState, userDisplayNameState, userState} from "../model/atoms";
import {
    createNewUser,
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
    const [error, setError] = useState(null);

    function logInACB(email, password) {
        signInUser(email, password)
            .then(() => {
                setError(null);
            })
            .catch((error) => {
                setError({form:'login', error: getErrorMessage(error)})
            });
    }

    function createAccountACB(name, email, password) {
        if(name === '') {
            setError({form: 'createAccount', error: 'Enter a non-empty display name.'})
            return;
        }
        createNewUser(name, email, password)
            .then(() => {
                setError(null);
            })
            .catch((error) => {
                setError({form:'createAccount', error: getErrorMessage(error)})
                throw error;
            });
    }

    function getErrorMessage(error) {
        if(error.message.includes('email-already-exists'))
            return 'Email already exists.'
        if(error.message.includes('invalid-display-name'))
            return 'Choose a non-empty display name.'
        if(error.message.includes('invalid-password'))
            return 'Choose a password that is least 6 characters.'
        if(error.message.includes('user-not-found'))
            return 'No user with the entered email was found.'
        if(error.message.includes('wrong-password'))
            return 'Wrong password!'
        if(error.message.includes('weak-password'))
            return 'Choose a password that is least 6 characters.'
        if(error.message.includes('email-already-in-use'))
            return 'Email already exists.'
        return error.message;
    }

    return ( <div>
        {currentUser &&<AccountView userId={currentUserId}
                                    userEmail={currentUserEmail}
                                    userDisplayName={currentUserNickname}
                                    bestWord = {bestWord}
                                    onSignOut={signOutUser}/>}
        {!currentUser && <LoginView onLogin={logInACB}
                                    onCreateAccount={createAccountACB}
                                    error={error}/>}
    </div>)
}
export default Account;