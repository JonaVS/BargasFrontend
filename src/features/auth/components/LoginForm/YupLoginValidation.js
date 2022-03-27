import * as Yup from "yup"

const loginValidation = Yup.object({
  email: Yup.string().email("Formato invalido").required("Campo requerido"),
  password: Yup.string().required('Campo requerido'),
})

export default loginValidation
