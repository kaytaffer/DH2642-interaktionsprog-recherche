import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase, ref, get, set, onValue, off} from "firebase/database";
//import {getAuth, signInAnonymously} from "firebase/auth";
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
        return snapshot.val()
    } else {
        console.log("When trying to find persistent high score no data was available");
        return [];
    }
}

export function checkEmptyFirebaseDBPath(databasePath, callback){
    function treatSnapshotACB(snapshot){
        callback(onDatabaseChangeACB(snapshot))
    }
    return get(ref(fireBDataB, databasePath)).then(treatSnapshotACB).catch((error) => {
        console.error(error);
    })
}

export function subscribeToDBPath(databasePath, callback) {
    function treatSnapshotACB(snapshot){
        callback(onDatabaseChangeACB(snapshot))
    }
    onValue(ref(fireBDataB, databasePath), treatSnapshotACB);
}

export function unsubscribeToDBPath (databasePath) {
    off(ref(fireBDataB, databasePath), onDatabaseChangeACB)
}

//On changes in the atom, updates the persistent database.
export function onLocalChange(databasePath, highScoreObject){
    return set(ref(fireBDataB, databasePath), highScoreObject)
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

