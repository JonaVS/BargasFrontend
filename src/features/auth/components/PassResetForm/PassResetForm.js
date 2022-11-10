import React, { useState } from "react"
import agent from "../../../../API/agent"
import { toastDispatcher, ToastType } from "../../../../helpers/toastDispatcher"
import { ErrorContext, errorMessageBuilder } from "../../../../helpers/errorMessageBuilder"
import { Container } from "react-bootstrap"
import { Form, Formik } from "formik"
import resetPasswordValidators from "./resetPassValidation"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
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
      <div className={styles.wrapper}>
        {!isSuccess ? (
          <>
            <h1 className={styles.formTitle}>Restablecer contraseña</h1>
            <Formik
              initialValues={{
                password: "",
                passwordConfirmation: "",
              }}
              validationSchema={resetPasswordValidators}
              onSubmit={values => handleSubmit(values)}
            >
              {formik => (
                <Form
                  className={styles.passChangeForm}
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
                  <button className={styles.generalBtn} type="submit">
                    Restablecer contraseña
                  </button>
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
      </div>
    </Container>
  )
}

PassResetForm.defaultProps = {
  authCode: "An invalid code",
}

export default PassResetForm
