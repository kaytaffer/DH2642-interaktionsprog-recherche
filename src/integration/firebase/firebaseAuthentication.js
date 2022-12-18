import {fireBAuth} from "./firebasInitialization";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
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

//TODO enable, subscribe from atom effect
onAuthStateChanged(fireBAuth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});