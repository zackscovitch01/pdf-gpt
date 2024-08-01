import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPPrKfIwmGYlODulwIRj4sRwgVc5N-4Jo",
  authDomain: "pdt-gpt.firebaseapp.com",
  projectId: "pdt-gpt",
  storageBucket: "pdt-gpt.appspot.com",
  messagingSenderId: "167163827309",
  appId: "1:167163827309:web:49c2eb6a9bd9a746211b64",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
