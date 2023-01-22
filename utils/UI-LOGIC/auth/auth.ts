import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const logInValues = {
  email: "",
  password: "",
};
const forgotValues = {
  email: "",
};

const phoneRegExp = /^((\+234)|0)[789]\d{9}$/;

const forgotValidation = Yup.object().shape({
  email: Yup.string().required("Kindly enter an email address").email("Email must be valid"),
});
const logInValidation = Yup.object().shape({
  email: Yup.string().required("Kindly enter an email address to login").email("Email must be valid"),
  password: Yup.string().required("Kindly enter your password"),
});
const registerValidation = Yup.object().shape({
  firstName: Yup.string().required("Kindly enter your first name").min(4, "Must be at least 4 characters"),
  lastName: Yup.string().required("Kindly enter your last name").min(4, "Must be at least 4 characters"),
  email: Yup.string().required("Kindly enter an email address").email("Email must be valid"),
  password: Yup.string().required("Kindly enter a password").min(6, "Must be at least 6 characters"),
  phoneNumber: Yup.string()
    .required("Kindly enter your phone number")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(11, "too short")
    .max(11, "too long"),
});
export { initialValues, registerValidation, forgotValues, logInValidation, logInValues, forgotValidation };
