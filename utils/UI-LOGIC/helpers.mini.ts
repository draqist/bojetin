import { info } from "console";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { savingsDataType } from "./../types";

const testdummy = {
  email: "boomjay0008@gmail.com",
  password: "fejka1234",
  authType: "google",
};

const createSavingsPlan = async (savingsData: savingsDataType) => {
  const { amount, title, category, startDate, endDate, description } = savingsData;
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

const IncomeAndExpenseTag = (info: { tag: string }) => {
  let tag;
  if (info.tag === "savings") {
    tag = "green";
  } else if (info.tag === "expense") {
    tag = "red";
  }
};

const timeChecker = () => {
  var now = new Date();
  var hrs = now.getHours();

  var currentTimeofDay: string;
  if (hrs < 12) {
    return (currentTimeofDay = "morning 🌅");
  } else if (hrs >= 12 && hrs <= 17) {
    return (currentTimeofDay = "afternoon 🌞");
  } else if (hrs >= 17 && hrs <= 24) {
    return (currentTimeofDay = "evening 🌙");
  }
};

export { testdummy, timeChecker, createSavingsPlan, IncomeAndExpenseTag };
