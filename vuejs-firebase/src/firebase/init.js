import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9iRZBdtMU6z4REZ8sVqCyXLyP5PDi6rI",
  authDomain: "vuejs-firebase-simple-crud.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-simple-crud.firebaseio.com",
  projectId: "vuejs-firebase-simple-crud",
  storageBucket: "vuejs-firebase-simple-crud.appspot.com",
  messagingSenderId: "119824444691",
  appId: "1:119824444691:web:545cc5d38699ccc9a4bee6",
  measurementId: "G-7MJZKQJ00G"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebaseApp.firestore()
