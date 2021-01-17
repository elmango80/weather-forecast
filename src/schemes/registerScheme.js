import * as yup from "yup";

const registerSchema = yup.object().shape({
  completeName: yup.string().required("Completa este campo."),
  email: yup
    .string()
    .email("El correo electrónico no es valido.")
    .required("Completa este campo."),
  password: yup
    .string()
    .min(8, "La contraseña debe contener mínimo 8 caracteres.")
    .required("Completa este campo."),
});

export default registerSchema;
