import * as Yup from "yup"

const normalValidation = {
  clientName: Yup.string()
    .max(30, "El campo debe contar con 40 caracteres o menos")
    .required("Campo requerido"),
  email: Yup.string().email("Formato invalido").required("Campo requerido"),
  address: Yup.string()
    .max(200, "El maximo de caracteres permito es de 200 o menos")
    .required("Campo requerido"),
  phone: Yup.number()
    .typeError("Solo se permiten números")
    .required("Campo requerido"),
}

const validationWithEInvoice = {
  ...normalValidation,
  invoiceReceiver: Yup.string()
    .max(30, "El campo debe contar con 40 caracteres o menos")
    .required("Campo requerido"),
  idType: Yup.string()
    .oneOf(["fisica", "juridica", "dimex", "NITE"], "Tipo de cédula invalido")
    .required("Requerido"),
  idNumber: Yup.number()
    .typeError("Solo se permiten números")
    .required("Campo requerido"),
}

const validationSchemas = {
  normalValidation: Yup.object(normalValidation),
  validationWithEInvoice: Yup.object(validationWithEInvoice),
}

export default validationSchemas
