import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .max(5, "Too Long!")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
