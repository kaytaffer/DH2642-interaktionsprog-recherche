import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries
//for example:
//import { getAnalytics } from "firebase/analytics";

//FIREBASE SETUP
//initializes firebase and relevant SDK:s
initializeApp(firebaseConfig);
export const fireBDataB = getDatabase();
export const fireBAuth = getAuth();

