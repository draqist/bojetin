import { collection } from "firebase/firestore";
import { db } from "../firebase";


//  "SF" will be replaced with the uid of the Firebase current user when authenticated.

const docRef = collection(db, "users", "SF");

export { docRef };
