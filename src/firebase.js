import * as Firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyAlrKPeoXjdjn373z6kqrluEb0ZEIyhOYM",
  authDomain: "contact-form-8b1f9.firebaseapp.com",
  projectId: "contact-form-8b1f9",
  storageBucket: "contact-form-8b1f9.appspot.com",
  messagingSenderId: "306657060879",
  appId: "1:306657060879:web:a4ef892b1a997734e91b7a",
});

export const db = getFirestore(firebaseApp);
