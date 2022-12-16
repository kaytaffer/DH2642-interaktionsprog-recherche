import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase, ref, get, set, onValue} from "firebase/database";
import {getAuth, signInAnonymously} from "firebase/auth";
// TODO: Add other SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//till exempel:
//import { getAnalytics } from "firebase/analytics";

//FIREBASE SETUP
//initializes firebase and relevant SDK:s
const app = initializeApp(firebaseConfig);
export const fireBDataB = getDatabase();
//const authentication = getAuth();



// ACB updates atom value according to changes in firebase given a snapshot of the database state
function onDatabaseChangeACB(snapshot) {
    if (snapshot.exists()) {
        return {highScoreNames: snapshot.val().highScoreNames,
            highScores: snapshot.val().highScores}
    } else {
        console.log("When trying to find persistent high score no data was available");
    }
}

export function checkEmptyFirebaseDBPath(databasePath){
    function treatSnapshotACB(snapshot){
        return onDatabaseChangeACB(snapshot)
    }
    return get(ref(fireBDataB, databasePath)).then(treatSnapshotACB).catch((error) => {
        console.error(error);
    })
}

export function subscribeToDBPath(databasePath) {
    onValue(ref(fireBDataB, databasePath), onDatabaseChangeACB);
}

export function unsubscribeToDBPath (databasePath) {
    onValue(ref(fireBDataB, databasePath), null);
}

//On changes in the atom, updates the persistent database.
export function onLocalChange(databasePath, highScoreObject){
    return set(ref(fireBDataB, databasePath), {
        highScoreNames: Object.assign({}, highScoreObject.highScoreNames),
        highScores: Object.assign({}, highScoreObject.highScores)}).catch(error => {
        console.error(error);
    })
}

/* TODO authentication:
signInAnonymously(authentication)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });
*/

