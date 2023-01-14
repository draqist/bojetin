import { Timestamp } from "firebase/firestore";

export type regUser = {
  email: string;
  password: string;
  authType?: string;
};

export type savingsDataType = {
  amount: string;
  title: string;
  category: string;
  startDate: Timestamp,
  endDate: Timestamp;
  description?: string;
}