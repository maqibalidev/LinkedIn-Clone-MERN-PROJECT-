import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDzgf2hApTNzycXk5NmAuZmCNG-GzrhjNk",
  authDomain: "linekedin-clone-73920.firebaseapp.com",
  projectId: "linekedin-clone-73920",
  storageBucket: "linekedin-clone-73920.appspot.com",
  messagingSenderId: "379872356275",
  appId: "1:379872356275:web:5ac529e1d937cd50194dc6",
  measurementId: "G-K5PKC8KF95"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 const auth = getAuth(app);


 export {db,auth}