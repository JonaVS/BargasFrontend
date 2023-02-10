import * as Yup from "yup"

export const contactFormValidators = {
  name: Yup.string()
    .max(30, "El campo debe contar con 40 caracteres o menos")
    .required("Campo requerido"),
  email: Yup.string().email("Formato invalido")
    .required("Campo requerido"),
  message: Yup.string()
    .max(300, "El maximo de caracteres permito es de 200 o menos")
    .required("Campo requerido"),
}
