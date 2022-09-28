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
}
