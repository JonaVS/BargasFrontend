import { StrapiErrors } from "./strapiErrors"

export const ErrorContext = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  PRODUCT_DETAILS: "PRODUCT_DETAILS",
  EVENTS: "EVENTS",
  ORDERING: "ORDERING",
  CONTACT: "CONTACT",
  USER_PASSWORD_CHANGE: "USER_PASSWORD_CHANGE",
  USER_RESET_PASSWORD: "USER_RESET_PASSWORD",
}

export const errorMessageBuilder = (context, error) => {
  if (error.code === 'ERR_NETWORK')
    return "No se pudo conectar con el servidor"

  const strapiError = error.response.data.error.message

  const message = StrapiErrors[context].find(
    err => err.strapiError === strapiError
  )

  return message ? message.translatedMessage : 'Se ha producido un error'
}