//RELEVANT IMPORTS
import {atom} from 'recoil';
import firebaseConfig from "../integration/firebase/firebaseConfig";

import {initializeApp} from 'firebase/app';
import {getDatabase, ref, get, set, onValue} from "firebase/database";
import {getAuth, signInAnonymously} from "firebase/auth";
/* TODO: Add other SDKs for Firebase products that we maybe want to use
     https://firebase.google.com/docs/web/setup#available-libraries
     till exempel: */
//import { getAnalytics } from "firebase/analytics";

//FIREBASE SETUP
//initializes firebase and relevant SDK:s
const app = initializeApp(firebaseConfig);
const fireBDataB = getDatabase();
const authentication = getAuth();

//TODO authentication:
signInAnonymously(authentication)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });


//RECOIL:
//Effect that syncs the high score data from recoil("state") to firebase database(persistence)
//TODO: Lift relevant functions to utility
const syncStorageEffect = () => ({setSelf, onSet, trigger}) => {

    const databasePath = '/highScore';

    // ACB updates atom value according to changes in firebase given a snapshot of the database state
    function onDatabaseChangeACB(snapshot) {
        const highScores = {highScoreNames: snapshot.val().highScoreNames,
            highScores: snapshot.val().highScores}
        setSelf(highScores)
    }

// Initialize atom value to the remote storage state if there is one
    if (trigger === 'get') { // Avoid expensive initialization
        function treatSnapshotACB(snapshot){
            if (snapshot.exists()) {
                onDatabaseChangeACB(snapshot)
            } else {
                console.log("When trying to find persistent high score no data was available");
            }
        }
        get(ref(fireBDataB, databasePath)).then(treatSnapshotACB).catch((error) => {
            console.error(error);
        })
    }

    //Subscribes to changes in the database on the relevant path
    onValue(ref(fireBDataB, databasePath), onDatabaseChangeACB);

    //On changes in the atom, updates the persistent database.
    function onLocalChangeACB(highScoreObject){
        set(ref(fireBDataB, databasePath), {
            highScoreNames: Object.assign({}, highScoreObject.highScoreNames),
            highScores: Object.assign({}, highScoreObject.highScores)}).catch(error => {
            console.error(error);
        })
    }

    // Subscribe to local changes and update the database value
    onSet(onLocalChangeACB);

    // Cleanup remote storage subscription
    return () => {
        onValue(ref(fireBDataB, databasePath), null);
    };
};

//The highscore atom containing the local highScore.
export const highScoreState = atom({
    key: 'highScoreState',
    default: {
        highScoreNames: ['dogge',],
        highScores: [-1]
    },
    effects: [syncStorageEffect()]
})



