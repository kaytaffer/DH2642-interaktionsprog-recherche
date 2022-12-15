//TODO: Deprecated file


import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set} from "firebase/database";
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

//TODO: Add more functions for model -> persistence



export function scoreboardUpdate() {
  //  const scoreNames = useRecoilValue(highScoreState).highScoreNames
  //  const scorePoints = useRecoilValue(highScoreState).highScorePoints
    return set(ref(fireBDataB, 'highScore/'), {
        highScoreNameList: Object.assign({}, scoreNames),
        highScorePointsList: Object.assign({}, scorePoints)
    });
}


//TODO: Add more functions for persistence -> model§