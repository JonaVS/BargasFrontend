import { StrapiErrors } from "./strapiErrors"

export const ErrorContext = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  PRODUCT_DETAILS: "PRODUCT_DETAILS",
  EVENTS: "EVENTS",
  ORDERING: "ORDERING",
  CONTACT: "CONTACT",
}

export const errorMessageBuilder = (context, error) => {
  let message = ""
  if (isNetworkOrServerRelated(error))
    return (message = "No se pudo conectar con el servidor")

  const strapiError = error.response.data.error.message

  message = StrapiErrors[context].find(
    err => err.strapiError === strapiError
  ).translatedMessage

  return message
}

const isNetworkOrServerRelated = error => {
  if (error.response.status === 0 ) return true
  return false
}
