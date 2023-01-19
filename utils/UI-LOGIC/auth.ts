import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, provider } from "../firebase";
import { regUser } from "./../types";

const signup = async (regData: regUser) => {
  try {
    const user = await axios.post("/api/auth", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regData),
    });
    console.log(user.data);
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req: regUser, width: number) => {
  const { email, password, authType } = req;

  if (width >= 413 && authType === "google") {
    try {
      await signInWithPopup(auth, provider).then((sessionResult) => {
        const credential = GoogleAuthProvider.credentialFromResult(sessionResult);
        const user = sessionResult.user;
        const docRef = addDoc(collection(db, "users"), {
          firstName: "",
          lastName: "",
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoUrl: user.photoURL,
        });
        console.log(user, docRef);
        return { user, credential };
      });
    } catch (error) {
      console.log(error);
    }
  } else if (width < 413 && authType === "google") {
    try {
      await signInWithRedirect(auth, provider).then(() => {
        getRedirectResult(auth).then((response) => {
          const user = response?.user;
          console.log(user);
          // const docRef = addDoc(collection(db, "users"), user);
          // console.log(docRef);
          return user;
        });
      });
    } catch (error) {
      // return res.status(500).json({ error });
      console.log(error);
    }
  } else {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const docRef = addDoc(collection(db, "users"), {
          firstName: "",
          lastName: "",
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoUrl: user.photoURL,
        });
        console.log(user, "user ", "doc", docRef);
        return user;
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const logInUser = async (req: regUser) => {
  const { email, password } = req;
  try {
    await signInWithEmailAndPassword(auth, email, password).then((loggedResponse) => {
      const user = loggedResponse.user;
      // return res.status(200).json(user)
      return user;
    });
  } catch (error) {
    console.log(error);
  }
};

export { logInUser, registerUser, signup };
