import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, provider } from "../../firebase";
import { forgotPassword, logInType, regUser } from "../../types";

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
  const { email, password, firstName, lastName, phoneNumber, authType } = req;

  if (width >= 413 && authType === "google") {
    try {
      await signInWithPopup(auth, provider).then((sessionResult) => {
        const credential = GoogleAuthProvider.credentialFromResult(sessionResult);
        const user = sessionResult.user;
        const { displayName } = user;
        // @ts-ignore
        const [firstName, lastName] = displayName?.split(" ");
        const docRef = addDoc(collection(db, "users"), {
          firstName,
          lastName,
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
          firstName,
          lastName,
          displayName: firstName + " " + lastName,
          email,
          phoneNumber,
          photoUrl: user.photoURL,
        });
        return user;
      });
    } catch (error) {
      console.log(error);
      return;
    }
  }
};

const logInUser = async (req: logInType) => {
  const { email, password } = req;
  try {
    await signInWithEmailAndPassword(auth, email, password).then((loggedResponse) => {
      const user = loggedResponse.user;
      sendEmailVerification(user).then((response) => {
        console.log(response);
      });
      console.log(user);
      return user;
    });
  } catch (error) {
    console.log(error);
  }
};

const forgotPassword = async (req: forgotPassword) => {
  const { email } = req;
  try {
    await sendPasswordResetEmail(auth, email).then(() => {
      // Password reset email sent!
      console.log("Password reset");
    });
  } catch (error) {
    // @ts-ignore
    const errorCode = error?.code;
    // @ts-ignore
    const errorMessage = error?.message;
  }
};
export { logInUser, registerUser, signup, forgotPassword };
