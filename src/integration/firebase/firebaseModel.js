import firebaseConfig from "./firebaseConfig";

import { initializeApp } from 'firebase/app';
import {getDatabase} from "firebase/database";
let firebase = require('firebase');
let firebaseui = require('firebaseui');
// TODO: Add other SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//till exempel:
//import { getAnalytics } from "firebase/analytics";

//FIREBASE SETUP
//initializes firebase and relevant SDK:s
const app = initializeApp(firebaseConfig);
export const fireBDataB = getDatabase();
export let authenticationUI = new firebaseui.auth.AuthUI(firebase.auth());
