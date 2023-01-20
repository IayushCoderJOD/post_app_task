import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD5bqDPMkdOcVpHhIZLFxcJLZ0ChSp_21c",
  authDomain: "blogsite1-e33ee.firebaseapp.com",
  projectId: "blogsite1-e33ee",
  storageBucket: "blogsite1-e33ee.appspot.com",
  messagingSenderId: "754364000417",
  appId: "1:754364000417:web:f61b72066ff23c3da7a8e0"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider =new GoogleAuthProvider();
