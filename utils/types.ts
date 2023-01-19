import { Timestamp } from "firebase/firestore";

export type regUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  authType?: string;
};

export type logInType = {
  email: string;
  password: string;
};
export type forgotPassword = {
  email: string;
};
export type savingsDataType = {
  amount: string;
  title: string;
  category: string;
  startDate: Timestamp;
  endDate: Timestamp;
  description?: string;
};
