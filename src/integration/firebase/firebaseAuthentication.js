import {fireBAuth} from "./firebasInitialization";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile}
    from "firebase/auth";

export function createNewUser(name, email, password){
    let f = createUserWithEmailAndPassword(fireBAuth, email, password)
                .then((userCredential) => {
                    console.log("did we get here");
                    updateProfile(fireBAuth.currentUser, {displayName: name})
                            .then(() => {
                                return userCredential.user; /*signed in*/
                            })
                })
    console.log(f);
    return f;
}//TODO better error handling for already existing creations -> redirect to login

export function signInUser(email, password){
    return signInWithEmailAndPassword(fireBAuth, email, password).then((userCredential) => {
        return userCredential.user; // Signed in
    })
} //TODO better error handling for false logins

export function subscribeToAuthChange(callback) {
    return onAuthStateChanged(fireBAuth, (user) => {
         callback(user);
    });
}

export function currentUser() {
    return fireBAuth.currentUser;
}

export function signOutUser() {
    return signOut(fireBAuth).catch((error) => { console.log(error) });
}

export function setUserDisplayName(name) {
    updateProfile(fireBAuth.currentUser, {displayName: name})
        .then(() => {
            console.log("user name set")
        })
        .catch((error) => {console.log(error)});
}
