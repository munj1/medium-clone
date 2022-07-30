// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDocs, getFirestore, query } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Eb88W6i6muXbbiCkH_KB-0-jYf7u55M",
  authDomain: "medium-clone-a64ef.firebaseapp.com",
  projectId: "medium-clone-a64ef",
  storageBucket: "medium-clone-a64ef.appspot.com",
  messagingSenderId: "41783255020",
  appId: "1:41783255020:web:dbdbbe3247a0455c60eac9",
  measurementId: "G-SYDEYMNK2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// async function Users(db) {
//   const usersCol = collection(db, "users");
//   const querySnapshot = await getDocs(usersCol);
//   const userList = querySnapshot.doc.map((doc) => doc.data());
//   return userList;
// }

export { auth, provider, db };
