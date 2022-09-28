import { StrapiErrors } from "./strapiErrors"

export const ErrorContext = {
  LOGIN: "login",
  SIGNUP: "signup",
  PRODUCT_DETAILS: "productDetails",
  EVENTS: "events",
  ORDERING: "ordering"
}

export const errorMessageBuilder = (context, error) => {
  let message = ""
  if (isNetworkOrServerRelated(error))
    return (message = "No se pudo conectar con el servidor")

  const strapiError = error.response.data.error.message

  switch (context) {
    case "login":
      message = StrapiErrors.LOGIN.find(
        err => err.strapiError === strapiError
      ).translatedMessage
      break
    case "signup":
      message = StrapiErrors.SIGNUP.find(
        err => err.strapiError === strapiError
      ).translatedMessage
      break
    case "productDetails":
      message = StrapiErrors.PRODUCT_DETAILS.find(
        err => err.strapiError === strapiError
      ).translatedMessage
      break
    case "events":
      message = StrapiErrors.EVENTS.find(
        err => err.strapiError === strapiError
      ).translatedMessage
      break
    case "ordering":
      message = StrapiErrors.ORDERING.find(
        err => err.strapiError === strapiError
      ).translatedMessage
      break
    default:
      break
  }
  return message
}

const isNetworkOrServerRelated = error => {
  if (error.response.status === 0 ) return true
  return false
}
