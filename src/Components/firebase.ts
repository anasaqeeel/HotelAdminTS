import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLu5AM41y7DWR_oBGSY3aGUE_mG98QrRQ",
  authDomain: "hoteladmints.firebaseapp.com",
  projectId: "hoteladmints",
  storageBucket: "hoteladmints.appspot.com",
  messagingSenderId: "671355376603",
  appId: "1:671355376603:web:39e542658c872eee0f4dfe",
  measurementId: "G-KH7T6YEWCB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, googleProvider ,db, storage};
