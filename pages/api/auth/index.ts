import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth, provider } from "../../../utils/firebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return await registerUser(req, res);
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, authType } = req.body;

  if (typeof window != undefined && window.screen.width >= 413 && authType === "google") {
    try {
      await signInWithPopup(auth, provider).then((sessionResult) => {
        const credential = GoogleAuthProvider.credentialFromResult(sessionResult);
        const user = sessionResult.user;
        return { user, credential };
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else if (typeof window != undefined && window.screen.width <= 412 && authType === "google") {
    try {
      await signInWithRedirect(auth, provider).then(() => {
        getRedirectResult(auth).then((response) => {
          const user = response?.user;
          return user;
        });
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      return user;
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
