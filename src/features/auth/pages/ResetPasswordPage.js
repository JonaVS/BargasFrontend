import React from "react"
import Seo from "../../../shared/components/Seo/seo"
import PassResetForm from "../components/PassResetForm/PassResetForm"

const ResetPasswordPage = () => {
  const urlParams = window && window.location.href.split("?")[1]
  const code = new URLSearchParams(urlParams).get("code")

  return (
    <>
      <Seo title='Restablecer contraseña' />
      <PassResetForm authCode={code} />
    </>
  )
}

export default ResetPasswordPage
