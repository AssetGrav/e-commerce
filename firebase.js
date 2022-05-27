import * as firebase from "firebase";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzycx0pFuuW8DH_CcD1tvvQXyZ4c_ekGw",
    authDomain: "farm-products-25b86.firebaseapp.com",
    databaseURL: "https://farm-products-25b86-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "farm-products-25b86",
    storageBucket: "farm-products-25b86.appspot.com",
    messagingSenderId: "209433205255",
    appId: "1:209433205255:web:943b571e45dfb57f4fa8a2"
};

// Initialize Firebase
let app
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

const db = app.database();

console.log("database", db.ref('/product'), auth)

export { auth, db, firebase }