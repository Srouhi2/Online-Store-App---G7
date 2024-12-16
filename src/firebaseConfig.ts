import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnCN3IiUA9INTAsgjEMhQ6lbYiMEqIehU",
  authDomain: "online-app-store-a7375.firebaseapp.com",
  projectId: "online-app-store-a7375",
  storageBucket: "online-app-store-a7375.appspot.com",
  messagingSenderId: "online-app-store-a7375",
  appId: "online-app-store-a7375",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

