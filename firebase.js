// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "facebook-clone-d6c0d.firebaseapp.com",
  projectId: "facebook-clone-d6c0d",
  storageBucket: "facebook-clone-d6c0d.appspot.com",
  messagingSenderId: "55405179073",
  appId: "1:55405179073:web:e5e43bf126367d1b03a440",
  measurementId: "G-ZMGRSWH1PW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
