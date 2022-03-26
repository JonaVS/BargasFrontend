import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import { Form, Formik } from "formik"
import loginValidation from '../LoginForm/YupLoginValidation'
import BargasTextField from "../Form/BargasTextField/BargasTextField"
import * as styles from "../RegisterForm/registerForm.module.css"

const LoginForm = () => {
  return (
    <Container fluid className={styles.formContainer}>
      <div className={styles.wrapper}>
        <span className={styles.linkLabel}>
          ¿No tienes una cuenta?:
          <Link to="/auth/signup" className={styles.loginLink}>
            Crea una aquí
          </Link>
        </span>
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
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default LoginForm