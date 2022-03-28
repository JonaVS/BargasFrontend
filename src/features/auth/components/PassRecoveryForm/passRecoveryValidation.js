import * as Yup from "yup"

const passRecoveryValidation = Yup.object({
  email: Yup.string().email("Formato invalido").required("Campo requerido"),
})

export default passRecoveryValidation
