import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerValidation = Yup.object().shape({
  firstName: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  lastName: Yup.string().required("Required").min(4, "Atleast 4 characters"),
  email: Yup.string().required("Required").email("email should be valid"),
  password: Yup.string().required("Required").min(6, "Atleast 6 characters"),
  phoneNumber: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(11, "too short")
    .max(11, "too long"),
});
export { initialValues, registerValidation };
