import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add other SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//till exempel:
//import { getAnalytics } from "firebase/analytics";

//FIREBASE SETUP
//initializes firebase and relevant SDK:s
const app = initializeApp(firebaseConfig);
export const fireBDataB = getDatabase();
export const fireBAuth = getAuth();