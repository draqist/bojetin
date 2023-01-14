import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { regUser } from "./../types";

const testdummy = {
  email: "boomjay008@gmail.com",
  password: "fejka1234",
  // authType: "google",
};

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
        const credential =
          GoogleAuthProvider.credentialFromResult(sessionResult);
        const user = sessionResult.user;
        return { user, credential };
      });
    } catch (error) {
      // return res.status(500).json({ error });
      console.log(error);
    }
  } else if (width <= 412 && authType === "google") {
    try {
      await signInWithRedirect(auth, provider).then(() => {
        getRedirectResult(auth).then((response) => {
          const user = response?.user;
          return user;
        });
      });
    } catch (error) {
      // return res.status(500).json({ error });
      console.log(error);
    }
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        return user;
      }
    );
  } catch (error) {
    // return res.status(500).json({ error });
    console.log(error);
  }
};

const logInUser = async (req: regUser) => {
  const { email, password } = req;
  try {
    await signInWithEmailAndPassword(auth, email, password).then(
      (loggedResponse) => {
        const user = loggedResponse.user;
        // return res.status(200).json(user)
        return user;
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export { signup, testdummy, registerUser, logInUser };
