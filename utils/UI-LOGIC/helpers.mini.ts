import axios from 'axios';
import { regUser } from './../types';


const signup = async (regData: regUser) => {
  try {
    const user = await axios.post("/api/auth", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(regData)
    })
    console.log(user.data)
  } catch (error) {
    console.log(error)
  }
}
const testdummy = { email: "boomjay008@gmail.com", password: "fejka1234", authType: "google" }

export { signup, testdummy };

