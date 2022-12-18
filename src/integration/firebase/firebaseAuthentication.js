import {fireBAuth} from "./firebasInitialization";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile}
    from "firebase/auth";

export function createNewUser(name, email, password){
    return createUserWithEmailAndPassword(fireBAuth, email, password)
                .then((userCredential) => {
                    updateProfile(fireBAuth.currentUser, {displayName: name})
                        .then(() => {/* Profile updated!*/});
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

export function setUserDisplayName(name) {
    updateProfile(fireBAuth.currentUser, {displayName: name})
        .then(() => {
            // Profile updated!
            // ...
        })
        .catch((error) => {console.log(error)});
}
