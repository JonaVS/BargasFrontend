import React from "react"
import agent from "../../../../API/agent"
import { toastDispatcher, ToastType } from "../../../../helpers/toastDispatcher"
import { ErrorContext, errorMessageBuilder } from "../../../../helpers/errorMessageBuilder"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import changePasswordValidators from "./changePasswordYupValidation"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import * as styles from "./changePasswordForm.module.css"

const ChangePasswordForm = () => {

  const handleSubmit = async (values, formikBag) => {
    try {
      await agent.user.changePassword(
        {
          currentPassword: values.currentPassword,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation,
        },
        { withCredentials: true }
      )
      toastDispatcher(
        ToastType.SUCCESS,
        '¡Contraseña actualizada correctamente!'
      )
      formikBag.resetForm()
    } catch (error) {
      toastDispatcher(
        ToastType.ERROR,
        errorMessageBuilder(ErrorContext.USER_PASSWORD_CHANGE, error)
      )
    }
  }  

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={Yup.object(changePasswordValidators)}
      onSubmit={(values, formikBag) => handleSubmit(values, formikBag) }
    >
      {formik => (
        <Form className={styles.passChangeForm} onSubmit={formik.handleSubmit}>
          {formik.isSubmitting && <LoadingOverlay />}
          <BargasTextField
            label="Contraseña actual"
            name="currentPassword"
            type="password"
            placeholder="Escribe la contraseña actual"
          />
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
            Cambiar contraseña
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePasswordForm
