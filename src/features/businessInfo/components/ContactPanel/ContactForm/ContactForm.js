import React from "react"
import agent from "../../../../../strapiApi/agent"
import { toastDispatcher, ToastType } from "../../../../../helpers/toastDispatcher"
import { ErrorContext, errorMessageBuilder } from "../../../../../helpers/errorMessageBuilder"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { contactFormValidators } from "./YupContactValidation"
import LoadingOverlay from "../../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../../shared/components/Form/BargasTextField/BargasTextField"
import BargasTextAreaField from "../../../../../shared/components/Form/BargasTextAreaField/BargasTextAreaField"
import Button, { ButtonTypeAnimation } from "../../../../../shared/components/Button/Button"
import * as styles from "./contactForm.module.css"

const ContactForm = () => {

  const handleSubmit = async (values, formikBag) => {
    try {
      await agent.contact.contactFormSubmission(values)
      toastDispatcher(
        ToastType.SUCCESS,
        '¡Mensaje enviado correctamente!'
      )
      formikBag.resetForm()
    } catch (error) {
      toastDispatcher(
        ToastType.ERROR,
        errorMessageBuilder(ErrorContext.CONTACT, error)
      )
    }
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object(contactFormValidators)}
      onSubmit={(values, formikBag) => handleSubmit(values, formikBag)}
    >
      {formik => (
        <Form className={styles.contactForm} onSubmit={formik.handleSubmit}>
          {formik.isSubmitting && <LoadingOverlay message='Enviando mensaje...'/>}
          <BargasTextField
            label="Nombre completo"
            name="name"
            type="text"
            placeholder="Escribe tu nombre aquí"
          />
          <BargasTextField
            label="Email"
            name="email"
            type="email"
            placeholder="bob@mail.com"
          />
          <BargasTextAreaField
            label="Mensaje"
            name="message"
            rows={5}
            placeholder="Escribe el mensaje aquí"
          />
          <Button
            type="submit"
            whileHover={ButtonTypeAnimation.MainHover}
            className={styles.submitBtn}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
