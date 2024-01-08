import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUTUYf6ZUR71B7wxId9FzZHk4MEP9mpbg",
  authDomain: "nwitter-reloaded-d45db.firebaseapp.com",
  projectId: "nwitter-reloaded-d45db",
  storageBucket: "nwitter-reloaded-d45db.appspot.com",
  messagingSenderId: "682700906826",
  appId: "1:682700906826:web:df40f84da8735f51dd21b3"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);