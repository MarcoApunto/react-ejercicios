import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.REACT.APIKEY,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: 
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)