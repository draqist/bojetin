import { signInWithEmailAndPassword } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../utils/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await logInUser(req, res);
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}

const logInUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  try {
    await signInWithEmailAndPassword(auth, email, password).then(
      (loggedResponse) => {
        const user = loggedResponse.user;
        // return res.status(200).json(user)
        return user;
      }
    );
  } catch (error) {
    return res.status(500).json({ error });
  }
};
