import * as Yup from "yup"

const registerValidation = Yup.object({
  fullName: Yup.string()
    .max(40, "El campo debe contar con 40 caracteres o menos")
    .required("Campo requerido"),
  email: Yup.string().email("Formato invalido").required("Campo requerido"),
  password: Yup.string().min(
    8,
    "La contraseña debe contener al menos 8 caracteres"
  ).required('Campo requerido'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "La contraseña debe coincidir"
  ).required('Campo requerido'),
  acceptTerms: Yup.boolean().isTrue('Se deben aceptar los terminos').required('Campo requerido')
})

export default registerValidation
