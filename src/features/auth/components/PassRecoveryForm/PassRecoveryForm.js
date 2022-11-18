import React, { useState } from "react"
import agent from "../../../../API/agent"
import { toastDispatcher, ToastType } from "../../../../helpers/toastDispatcher"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import { formVariants } from "../../shared/formMotionVariants"
import { Form, Formik } from "formik"
import passRecoveryValidation from "./passRecoveryValidation"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import OperationResultMessage from "../../../../shared/components/OperationResultMessage/OperationResultMessage"
import * as styles from "../../shared/authForm.module.css"

const PassRecoveryForm = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async values => {
    try {
      await agent.user.forgotPassword({ ...values })
      setIsSuccess(true)
    } catch (error) {
      toastDispatcher(ToastType.ERROR, "No se pudieron enviar las instrucciones")
    }
  }

  return (
    <Container fluid className={styles.formContainer}>
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="show"
        className={styles.wrapper}
      >
        {!isSuccess ? (
          <>
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
              onSubmit={values => handleSubmit(values)}
            >
              {formik => (
                <Form onSubmit={formik.handleSubmit}>
                  {formik.isSubmitting && <LoadingOverlay />}
                  <BargasTextField label="Email" name="email" type="email" />
                  <button className={styles.generalBtn} type="submit">
                    RECUPERAR
                  </button>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <OperationResultMessage message="Se han enviado las instrucciones de recuperación" />
        )}
      </motion.div>
    </Container>
  )
}

export default PassRecoveryForm
