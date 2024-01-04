
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA7VvQDDCeN2CWHMR7aThvZKJLDd3rhkNs",
  authDomain: "portfolio-reactjs-56f15.firebaseapp.com",
  projectId: "portfolio-reactjs-56f15",
  storageBucket: "portfolio-reactjs-56f15.appspot.com",
  messagingSenderId: "885489202300",
  appId: "1:885489202300:web:8ffb79355f60dc45f605f9",
  measurementId: "G-M2W6TLERTT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);