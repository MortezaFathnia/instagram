import firebase from "firebase";
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6cyr_6hUgR2panMsm-FGwp4BiepITYUc",
    authDomain: "m-city-a0615.firebaseapp.com",
    databaseURL: "https://m-city-a0615-default-rtdb.firebaseio.com",
    projectId: "m-city-a0615",
    storageBucket: "m-city-a0615.appspot.com",
    messagingSenderId: "623143070273",
    appId: "1:623143070273:web:c44de5fe1886cb5f09b4c0",
    measurementId: "G-QKWX7270CP"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseTeams=firebaseDB.ref('teams');

const firebaseMatches=firebaseDB.ref('matches');

const firebasePromotions=firebaseDB.ref('promotions');


export{
    firebase,
    firebaseDB,
    firebaseTeams,
    firebaseMatches,
    firebasePromotions
}