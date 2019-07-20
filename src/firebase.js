import firebase from "firebase";
const firebaseui = "firebaseui";

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

function start() {
    console.log("firebase", firebase);
}

export default provider;
