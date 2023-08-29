import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqiCDJNd5MaDGUt37xIQq1-o1BI0uTG4A",
  authDomain: "crwn-clothing-db-2f814.firebaseapp.com",
  projectId: "crwn-clothing-db-2f814",
  storageBucket: "crwn-clothing-db-2f814.appspot.com",
  messagingSenderId: "309322989473",
  appId: "1:309322989473:web:01f3b79952200fa65a15e0",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: { uid: string }) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
