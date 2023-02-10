import React, { useState } from "react"
import agent from "../../../../strapiApi/agent"
import { toastDispatcher, ToastType } from "../../../../helpers/toastDispatcher"
import { ErrorContext, errorMessageBuilder } from "../../../../helpers/errorMessageBuilder"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import { formVariants } from "../../shared/formMotionVariants"
import { Form, Formik } from "formik"
import resetPasswordValidaton from "./YupResetPassValidation"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import Button, { ButtonTypeAnimation } from "../../../../shared/components/Button/Button"
import OperationResultMessage from "../../../../shared/components/OperationResultMessage/OperationResultMessage"
import * as styles from "../../shared/authForm.module.css"

const PassResetForm = ({ authCode }) => {
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async values => {
    try {
      await agent.user.resetPassword({
        code: authCode,
        ...values,
      })
      setIsSuccess(true)
    } catch (error) {
      toastDispatcher(
        ToastType.ERROR,
        errorMessageBuilder(ErrorContext.USER_RESET_PASSWORD, error)
      )
    }
  }

  return (
    <Container fluid className={styles.formContainer}>
      <motion.div         
        variants={formVariants}
        initial="hidden"
        animate="show" 
        className={styles.wrapper}>
        {!isSuccess ? (
          <>
            <h1 className={styles.formTitle}>Restablecer contraseña</h1>
            <Formik
              initialValues={{
                password: "",
                passwordConfirmation: "",
              }}
              validationSchema={resetPasswordValidaton}
              onSubmit={values => handleSubmit(values)}
            >
              {formik => (
                <Form
                  onSubmit={formik.handleSubmit}
                >
                  {formik.isSubmitting && <LoadingOverlay />}
                  <BargasTextField
                    label="Contraseña nueva"
                    name="password"
                    type="password"
                    placeholder="Escribe la contraseña nueva"
                  />
                  <BargasTextField
                    label="Confirmar contraseña"
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirma la nueva contraseña"
                  />
                  <Button
                    whileHover={ButtonTypeAnimation.MainHover}
                    className={styles.authBtn}
                    type="submit"
                  >
                    Restablecer contraseña
                  </Button>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <OperationResultMessage
            message="Se ha actualizado tú contraseña"
            to="/app/login"
          />
        )}
      </motion.div>
    </Container>
  )
}

PassResetForm.defaultProps = {
  authCode: "An invalid code",
}

export default PassResetForm
