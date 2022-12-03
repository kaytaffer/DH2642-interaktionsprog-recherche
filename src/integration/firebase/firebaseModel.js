import firebaseConfig from "./firebaseConfig";

const firebase= require("firebase/app");
require('firebase/database');

window.firebase=firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add other SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//till exempel:
import { getDatabase, ref, set} from "firebase/database";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


//TODO try to write to database
const REF = "mainDB";

export function writeToFirebaseACB(somethingToWrite   ){
    console.log(analytics);
    set(ref(database, REF), {kevinsCommentCorner : somethingToWrite})


    //neither solution seems to work
    firebase.database().ref(REF+"/kevinsCommentCorner").set(somethingToWrite);

}