import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC5d-UuSRRTfk6K4xvZMf3_--Az1a78hrI",
  authDomain: "bestbikes-app.firebaseapp.com",
  projectId: "bestbikes-app",
  storageBucket: "bestbikes-app.appspot.com",
  messagingSenderId: "1026649547912",
  appId: "1:1026649547912:web:2543498e2484256ecc2b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const firestoreDb = getFirestore(app);