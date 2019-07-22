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
    console.log("hello")
    firebase
        .auth()
        .signInWithRedirect(provider)
        .then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("token", token);
            console.log("user", user);
            // ...
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}

export default start;
