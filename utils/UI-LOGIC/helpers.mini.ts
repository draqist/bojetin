import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { savingsDataType } from "./../types";

const testdummy = {
  email: "boomjay0008@gmail.com",
  password: "fejka1234",
  authType: "google",
};

const createSavingsPlan = async (savingsData: savingsDataType) => {
  const { amount, title, category, startDate, endDate, description } =
    savingsData;
  try {
    await addDoc(collection(db, "savings"), {
      amount,
      title,
      category,
      startDate,
      endDate,
      description,
    });
  } catch (error) {
    console.log(error);
  }
};

export { testdummy, createSavingsPlan };
