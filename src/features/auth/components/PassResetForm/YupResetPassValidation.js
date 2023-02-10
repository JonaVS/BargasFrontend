import * as Yup from "yup"

const resetPasswordValidaton = Yup.object({
  password: Yup.string()
    .min(8, "La contraseña debe contener al menos 8 caracteres")
    .required("Campo requerido"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "La contraseña debe coincidir")
    .required("Campo requerido"),
})

export default resetPasswordValidaton
