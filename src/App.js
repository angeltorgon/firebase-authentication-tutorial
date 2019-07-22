import React, { useEffect } from "react";
import "./App.css";
import start from "./firebase";
import firebase from "firebase";

function App() {
    useEffect(() => {
        firebase.auth()
        .getRedirectResult()
        .then(function(result) {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // ...
            }
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            console.log(token);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    });

    const handleClick = () => {
        start();
    };

    return (
        <div className="App">
            <button onClick={() => handleClick()}>Login with firebase</button>
        </div>
    );
}

export default App;
