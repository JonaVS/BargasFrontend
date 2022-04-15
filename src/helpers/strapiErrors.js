export const StrapiErrors = {
  LOGIN: [
    {
      strapiError: "Invalid identifier or password",
      translatedMessage: "Email o contraseña incorrecto"
    },
    {
      strapiError: "Your account email is not confirmed",
      translatedMessage: "El email de tu cuenta no ha sido confirmado"
    },
    {
      strapiError: "Your account has been blocked by an administrator",
      translatedMessage: "Tu cuenta ha sido bloqueada."
    },
  ],
  SIGNUP: [
    {
      strapiError: "Email is already taken",
      translatedMessage: "El email ya ha sido utilizado"
    },
  ],
  PRODUCT_DETAILS: [
    {
      /*This error is extremely rare to happen, but just in case*/
      strapiError: "Not Found",
      translatedMessage: "No se pudo verificar la disponibilidad del producto" 
    },
  ]
}
