import React from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import BargasTextField from "../../Form/BargasTextField/BargasTextField"
import BargasTextAreaField from "../../Form/BargasTextAreaField/BargasTextAreaField"
import { Button } from "react-bootstrap"
import * as styles from "../ContactForm/contactForm.module.css"

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, "El campo debe contar con 40 caracteres o menos")
            .required("Campo requerido"),
          email: Yup.string()
            .email("Formato invalido")
            .required("Campo requerido"),
          message: Yup.string()
            .max(200, "El maximo de caracteres permito es de 200 o menos")
            .required("Campo requerido"),
        })}

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
            <Button
              type="submit"
              variant="custom"
              className={styles.submitBtn}
              disabled={!(formik.isValid && formik.dirty)}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm
