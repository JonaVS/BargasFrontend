import React from "react"
import { Container } from "react-bootstrap"
import { Form, Formik } from "formik"
import registerValidation from "./YupRegisterValidation"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import BargasCheckBoxField from "../../../../shared/components/Form/BargasCheckBoxField/BargasCheckboxField"

import * as styles from "./registerForm.module.css"
import { Link } from "gatsby"

const RegisterForm = () => {
  return (
    <Container fluid className={styles.formContainer}>
      <div className={styles.wrapper}>
        <span className={styles.linkLabel}>
          ¿Ya tienes una cuenta?:
          <Link to="/auth/login" className={styles.loginLink}>
            Inicia sesión aquí
          </Link>
        </span>
        <h1 className={styles.formTitle}>Registro</h1>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
          }}
          validationSchema={registerValidation}
          onSubmit={(values, formikBag) => {
            console.log(values)
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
              <BargasTextField
                label="Nombre completo"
                name="fullName"
                type="text"
                placeholder="Escribe tu nombre aquí"
              />
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
              <BargasTextField
                label="Confirmar contraseña"
                name="confirmPassword"
                type="password"
              />
              <BargasCheckBoxField name="acceptTerms">
                He leido y acepto la Politica de Privacidad, asi como los
                Terminos y Condiciones.
              </BargasCheckBoxField>
              <button className={styles.generalBtn} type="submit">
                REGISTRARSE
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default RegisterForm
