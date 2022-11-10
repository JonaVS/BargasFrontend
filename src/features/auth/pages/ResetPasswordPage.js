import React from "react"
import PassResetForm from "../components/PassResetForm/PassResetForm"

const ResetPasswordPage = () => {
  const urlParams = window && window.location.href.split("?")[1]
  const code = new URLSearchParams(urlParams).get("code")

  return (
    <>
      <PassResetForm authCode={code} />
    </>
  )
}

export default ResetPasswordPage
