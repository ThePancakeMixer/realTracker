const firebase = require("firebase");
const axios = require('axios');

var firebaseConfig = {
    apiKey: "AIzaSyDAxHqnVUqH3S_yoekl3_7rgYztsKwSUt8",
    authDomain: "logger-707b8.firebaseapp.com",
    databaseURL: "https://logger-707b8.firebaseio.com",
    projectId: "logger-707b8",
    storageBucket: "logger-707b8.appspot.com",
    messagingSenderId: "647654648409",
    appId: "1:647654648409:web:f261de6ab9886c79d45f48",
    measurementId: "G-W66E1EBBCD"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log("hello")
let API = {
    firebase : firebase,
    registerUser : async function(email,password){
        try
        {
            console.log("Registering email: " + email)
            let user = await firebase.auth().createUserWithEmailAndPassword(email,password);
            console.log("Successfully registered " + email);
        }
        catch(err)
        {
            console.log("Error registering email: " + err)
        }
    },
    loginUser : async function(email,password){
        try
        {
            console.log("Siging in with email: " + email)
            let user = await firebase.auth().signInWithEmailAndPassword(email,password);
            console.log("Sign in successful " + email);
        }
        catch(err)
        {
            console.log("Error signing in: " + err)
        }
    },
    signOut : async function(){
        await firebase.auth().signOut();
    },
    verifyIdTocken : async function(){
        const response = await axios.get('/verifyIdTocken');
    }
}



export default API;
