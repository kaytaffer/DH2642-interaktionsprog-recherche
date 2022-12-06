import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set} from "firebase/database";
// TODO: Add other SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//till exempel:
//import { getAnalytics } from "firebase/analytics";

//initializes firebase
const app = initializeApp(firebaseConfig);
const fireBDataB = getDatabase();

//TODO: Add more functions for model -> persistence
//A dummy write function for testing writing to the db
export function dbWriteTester(messageToPost) {
    set(ref(fireBDataB, 'kevinsCommentCorner/'), {
        message: messageToPost
    });
}

//TODO: Add more functions for persistence -> model