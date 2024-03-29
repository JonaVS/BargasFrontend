import React, { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import { formVariants } from "../../shared/formMotionVariants"
import { Form, Formik } from "formik"
import registerValidation from "./YupRegisterValidation"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import BargasCheckBoxField from "../../../../shared/components/Form/BargasCheckBoxField/BargasCheckboxField"
import LabelLink from "../../../../shared/components/LabelLink/LabelLink"
import Button, { ButtonTypeAnimation } from "../../../../shared/components/Button/Button"
import * as styles from "../../shared/authForm.module.css"

const RegisterForm = () => {
  const { register } = useContext(UserContext)

  return (
    <Container fluid className={styles.formContainer}>
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="show"
        className={styles.wrapper}
      >
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
          onSubmit={async(values, formikBag) => {
            await register({
              username: values.fullName,
              email: values.email,
              password: values.password,
            })
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
              {formik.isSubmitting && <LoadingOverlay />}
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
              <Button
                whileHover={ButtonTypeAnimation.MainHover}
                className={styles.authBtn}
                type="submit"
              >
                Registrarse
              </Button>
              <LabelLink
                labelText="¿Ya tienes una cuenta?:"
                linkText="Inicia sesión aquí"
                to="/app/login"
              />
            </Form>
          )}
        </Formik>
      </motion.div>
    </Container>
  )
}

export default RegisterForm
