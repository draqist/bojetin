import { getDocs } from "firebase/firestore"
import { docRef } from "./docRefs"

const spendingHistory = async () => {
  try {
    const userHistory = await getDocs(docRef)
    return userHistory
  } catch (error) {
    console.log("Could not fetch data")
  }
}

export { spendingHistory }
