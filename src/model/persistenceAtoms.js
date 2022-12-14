import { atom } from 'recoil';
import firebaseConfig from "../integration/firebase/firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase, child, ref, get, set, onValue} from "firebase/database";
import {getAuth, signInAnonymously} from "firebase/auth";
// TODO: Add other SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//till exempel:
//import { getAnalytics } from "firebase/analytics";

//initializes firebase and relevant SDK:s
const app = initializeApp(firebaseConfig);
const fireBDataB = getDatabase();
const authentication = getAuth();


signInAnonymously(authentication)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });

//ATOMICS:

export const highScoreState = atom({
    key: 'highScoreState',
    default: {
        highScoreNames: ['dogge',],
        highScores: [-1]
    },
    effects: [syncStorageEffect]
})

const syncStorageEffect = () => ({setSelf, onSet, trigger}) => {

    // Subscribe to remote storage changes and update the atom value
    function onDatabaseChangeACB(snapshot) {
        const highScores = {highScoreNames: snapshot.val().highScoreNames,
            highScores: snapshot.val().highScores}
        setSelf(highScores)
    }

    const databasePath = '/highScoreTable';
// Initialize atom value to the remote storage state
    if (trigger === 'get') { // Avoid expensive initialization
        function treatSnapshotACB(snapshot){
            if (snapshot.exists()) {
                onDatabaseChangeACB(snapshot)
            } else {
                console.log("When trying to find persistent high score no data was available");
            }
        }

        get(child(ref(fireBDataB, databasePath))).then(treatSnapshotACB).catch((error) => {
            console.error(error);})
    }

    onValue(ref(fireBDataB, databasePath), onDatabaseChangeACB);

    function onLocalChangeACB(highScoreObject){
        //TODO handle promise in case of error

        set(ref(fireBDataB, databasePath), {
            highScoreNames: Object.assign({}, highScoreObject.highScoreNames),
            highScores: Object.assign({}, highScoreObject.highScores)})
        //TODO does the identical naming bang us
    }
    // Subscribe to local changes and update the server value
    onSet(onLocalChangeACB);

    // Cleanup remote storage subscription
    return () => {
        onValue(ref(fireBDataB, databasePath), null);
    };
};



