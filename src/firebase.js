import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAWA4BH7aoYX1-lwUPaNl9xfKCk82Fqv48",
    authDomain: "fir-tutorial-cad7d.firebaseapp.com",
    databaseURL: "https://fir-tutorial-cad7d.firebaseio.com",
    projectId: "fir-tutorial-cad7d",
    storageBucket: "fir-tutorial-cad7d.appspot.com",
    messagingSenderId: "976833235192",
    appId: "1:976833235192:web:ee123d5777eb0ff2"
};

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

function start() {
    firebase.auth().signInWithRedirect(provider);
}


export default start;
