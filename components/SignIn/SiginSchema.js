import * as yup from "yup";

export const SiginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Please Enter Email *"),
  password: yup.string().required("Please Enter Password"),
});
