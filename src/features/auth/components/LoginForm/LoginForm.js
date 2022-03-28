import React from "react"
import { Container } from "react-bootstrap"
import { Form, Formik } from "formik"
import loginValidation from "./YupLoginValidation"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import LabelLink from "../../../../shared/components/LabelLink/LabelLink"
import * as styles from "../RegisterForm/registerForm.module.css"

const LoginForm = () => {
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
          onSubmit={(values, formikBag) => {
            console.log(values)
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
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
