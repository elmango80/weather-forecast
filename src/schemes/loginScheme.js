import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Completa este campo."),
  password: yup.string().required("Completa este campo."),
});

export default loginSchema;
