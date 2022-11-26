import React from "react"
import Seo from "../../../shared/components/Seo/seo"
import LoginForm from "../components/LoginForm/LoginForm"

const LoginPage = () => {
  return (
    <>
      <Seo title="Iniciar sesión" />
      <LoginForm />
    </>
  )
}

export default LoginPage
