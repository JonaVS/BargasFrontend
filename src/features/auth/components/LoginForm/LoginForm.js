import React, { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"
import { Container } from "react-bootstrap"
import { Form, Formik } from "formik"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import loginValidation from "./YupLoginValidation"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import LabelLink from "../../../../shared/components/LabelLink/LabelLink"
import * as styles from "../../shared/authForm.module.css"

const LoginForm = () => {
  const { login } = useContext(UserContext)
  return (
    <Container fluid className={styles.formContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.formTitle}>Iniciar sesión</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidation}
          onSubmit={async(values, formikBag) =>  {
            await login({ email: values.email, password: values.password })
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
            {formik.isSubmitting && <LoadingOverlay/>}
              <BargasTextField
                label="Email"
                name="email"
                type="email"
                placeholder="bob@email.com"
              />
              <BargasTextField
                label="Contraseña"
                name="password"
                type="password"
              />
              <button className={styles.generalBtn} type="submit">
                INICIAR SESIÓN
              </button>
              <LabelLink
                labelText="¿No tienes una cuenta?:"
                linkText="Crea una aqui"
                to="/auth/signup"
              />
              <LabelLink
                labelText="¿Haz olvidado tu contraseña?:"
                linkText="Recuperar contraseña"
                to="/auth/passwordRecovery"
              />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default LoginForm
