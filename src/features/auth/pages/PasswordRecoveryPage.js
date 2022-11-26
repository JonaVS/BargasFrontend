import React from "react"
import Seo from "../../../shared/components/Seo/seo"
import PassRecoveryForm from "../components/PassRecoveryForm/PassRecoveryForm"

const PasswordRecoveryPage = () => {
  return (
    <>
      <Seo title='Recuperar contraseña' />
      <PassRecoveryForm />
    </>
  )
}

export default PasswordRecoveryPage
