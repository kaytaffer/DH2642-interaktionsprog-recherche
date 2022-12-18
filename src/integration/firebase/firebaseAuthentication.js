import {fireBAuth} from "./firebasInitialization";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut}
    from "firebase/auth";

export function createNewUser(email, password){
    return createUserWithEmailAndPassword(fireBAuth, email, password).then((userCredential) => {
        return userCredential.user;// Signed in
    }).catch((error) => { throw error;});
}//TODO better error handling for already existing creations -> redirect to login

export function signInUser(email, password){
    return signInWithEmailAndPassword(fireBAuth, email, password).then((userCredential) => {
        console.log("from fbAuth: " +  userCredential.user)
        return userCredential.user; // Signed in
    }).catch((error) => {throw error;});
} //TODO better error handling for false logins

export function subscribeToAuthChange(callback) {
    console.log("adding observer");
    return onAuthStateChanged(fireBAuth, (user) => {
         callback(user);
    });
}

export function unsubscribeToAuthChange() {
    onAuthStateChanged(fireBAuth, null);
}

export function currentUser() {
    return fireBAuth.currentUser;
}

export function signOutUser() {
    return signOut(fireBAuth).catch((error) => { console.log(error) });
}
