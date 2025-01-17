import {fireBAuth} from "./firebasInitialization";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile}
    from "firebase/auth";

export function createNewUser(name, email, password){
    return createUserWithEmailAndPassword(fireBAuth, email, password)
                .then((userCredential) => {
                    updateProfile(fireBAuth.currentUser, {displayName: name})
                            .then(() => {
                                return userCredential.user; /*signed in*/
                            })
                })
}

export function signInUser(email, password){
    return signInWithEmailAndPassword(fireBAuth, email, password).then((userCredential) => {
        return userCredential.user; // Signed in
    })
}

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
