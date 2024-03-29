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
      strapiError: "Email or Username are already taken",
      translatedMessage: "El email o nombre de usuario ya ha sido utilizado"
    },
  ],
  PRODUCT_DETAILS: [
    {
      strapiError: "Not Found",
      translatedMessage: "No se pudo verificar la disponibilidad del producto" 
    },
  ],
  ORDERING: [
    {
      strapiError: "Invalid order data",
      translatedMessage: "Datos de orden inválidos"
    },
    {
      strapiError: "Invalid product data",
      translatedMessage: "Información de producto inválida"
    },
    {
      strapiError: "Unavailable Items",
      translatedMessage: "Productos no disponibles"
    },
    {
      strapiError: "Error validating order",
      translatedMessage: "Error al validar la orden"
    },
    {
      strapiError: "Error placing order",
      translatedMessage: "Error al establecer la orden"
    },
    {
      strapiError: "Error generating payment session",
      translatedMessage: "No se pudo generar sesión de pago"
    },
  ],
  EVENTS: [
    {}
  ],
  CONTACT: [
    {
      strapiError: "The submitted data is invalid",
      translatedMessage: "La información enviada es invalida"
    },
    {
      strapiError: "Invalid email",
      translatedMessage: "Correo invalido"
    },
    {
      strapiError: "Message lenght should be equal or less than 300 characters",
      translatedMessage: "La longitud del mensaje debe de ser igual o menor a 300 caracteres"
    },
    {
      strapiError: "Empty message",
      translatedMessage: "Mensaje vacío"
    },
  ],
  USER_PASSWORD_CHANGE: [
    {
      strapiError: "The provided current password is invalid",
      translatedMessage: "La contraseña actual es invalida"
    },
    {
      strapiError: "Your new password must be different than your current password",
      translatedMessage: "La contraseña nueva debe de ser diferente a la actual"
    },
  ],
  USER_RESET_PASSWORD: [
    {
      strapiError: "Passwords do not match",
      translatedMessage: "Las contraseñas no coinciden"
    },
    {
      strapiError: "Incorrect code provided",
      translatedMessage: "El código de autorización no es válido"
    },
    {
      strapiError: "code must be a `string` type, but the final value was: `null`.",
      translatedMessage: "El código de autorización no es válido"
    },
  ],
}
