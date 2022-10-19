import React from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { contactFormValidators } from "./YupValidation"
import BargasTextField from "../../../../../shared/components/Form/BargasTextField/BargasTextField"
import BargasTextAreaField from "../../../../../shared/components/Form/BargasTextAreaField/BargasTextAreaField"
import * as styles from "./contactForm.module.css"

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object(contactFormValidators)}
      onSubmit={(values) => console.log(values)}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
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
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
