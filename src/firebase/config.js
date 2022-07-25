import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAblaJjz0Ym3_ZuNblCuY0WEReHYtbSzyk",
  authDomain: "bee-org.firebaseapp.com",
  projectId: "bee-org",
  storageBucket: "bee-org.appspot.com",
  messagingSenderId: "709625260701",
  appId: "1:709625260701:web:a095964c4cc5140a524274",
};
firebase.initializeApp(firebaseConfig);

///i it
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
