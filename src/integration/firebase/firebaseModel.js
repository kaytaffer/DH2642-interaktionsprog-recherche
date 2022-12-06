import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set} from "firebase/database";
// TODO: Add other SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//till exempel:
//import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const fireBDataB = getDatabase();

export function dbWriteTester(messageToPost) {
    set(ref(fireBDataB, 'kevinsCommentCorner/'), {
        message: messageToPost
    });
}