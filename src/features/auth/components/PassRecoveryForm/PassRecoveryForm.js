import React from "react"
import { Container } from "react-bootstrap"
import { Form, Formik } from "formik"
import passRecoveryValidation from "./passRecoveryValidation"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import * as styles from "../../shared/authForm.module.css"

const PassRecoveryForm = () => {
  return (
    <Container fluid className={styles.formContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.formTitle}>Recuperar contraseña</h1>
        <p className={styles.extraText}>
          *Ingresa el correo de tu cuenta y te haremos llegar los pasos para
          recuperar el acceso.
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={passRecoveryValidation}
          onSubmit={(values, formikBag) => {
            console.log(values)
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
            {formik.isSubmitting && <LoadingOverlay/>}
              <BargasTextField label="Email" name="email" type="email" />
              <button className={styles.generalBtn} type="submit">
                RECUPERAR
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default PassRecoveryForm
