import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClBvwX1P-dVZfz0dCBEl5v_HPDp9WHlFQ",
  authDomain: "bojetin.firebaseapp.com",
  projectId: "bojetin",
  storageBucket: "bojetin.appspot.com",
  messagingSenderId: "734413556848",
  appId: "1:734413556848:web:29e865592f7e197ae638b5",
  measurementId: "G-0BYP05H1QH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  Providers for social login
const provider = new GoogleAuthProvider();
// Initialize firestore
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth, db, provider };
