import { StrapiErrors } from "./strapiErrors"

export const ErrorContext = {
  LOGIN: "login",
  SIGNUP: "signup",
}

export const errorMessageBuilder = (context, errorObject) => {
  if (isNetworkOrServerRelated(errorObject))
    return (message = "No se pudo conectar con el servidor")

  const errorId = errorObject.response.data.message[0].messages[0]
  let message = ""

  switch (context) {
    case "login":
      message = StrapiErrors.LOGIN.find(err => err.id === errorId).message
      break
    case "signup":
      message = StrapiErrors.SIGNUP.find(err => err.id === errorId).message
      break
    default:
      break
  }
  return message
}

const isNetworkOrServerRelated = errorObject => {
  if (!errorObject.response) return true
  if (errorObject.response.status > 500) return true
  return false
}
