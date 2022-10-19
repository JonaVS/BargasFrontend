import React, { useContext, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import { Form, Formik } from "formik"
import { toastDispatcher, ToastType } from "../../../../helpers/toastDispatcher"
import { ErrorContext, errorMessageBuilder } from "../../../../helpers/errorMessageBuilder"
import { navigate } from "gatsby"
import validationSchemas from "../ClientInfoForm/YupValidations"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import BargasTextAreaField from "../../../../shared/components/Form/BargasTextAreaField/BargasTextAreaField"
import BargasSelectField from "../../../../shared/components/Form/BargasSelectField/BargasSelectField"
import BargasCheckBoxField from "../../../../shared/components/Form/BargasCheckBoxField/BargasCheckboxField"
import CartDivider from "../../../cart/components/CartDivider/CartDivider"
import BargasRadioButton from "../../../../shared/components/Form/BargasRadioButton/BargasRadioButton"
import CartTotalSummary from "../../../cart/components/CartTotalSummary/CartTotalSummary"

import * as styles from "./clientInfoForm.module.css"

const ClientInfoForm = () => {
  const { placeOrder } = useContext(CartContext)
  const [withInvoice, setWithInvoice] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)

  const handleExtraFields = () => setWithInvoice(!withInvoice)

  function focusErrors(errors) {
    const errorKeys = Object.keys(errors)
    if (errorKeys.length > 0) {
      const el = document.getElementsByName(errorKeys[0])[0]
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      el.focus()
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          clientName: "",
          address: "",
          phone: "",
          email: "",
          province: "Cartago",
          acceptedInvoice: false,
          invoiceReceiver: "",
          idType: "",
          idNumber: "",
          paymentType: "Card",
        }}
        validationSchema={
          withInvoice
            ? validationSchemas.validationWithEInvoice
            : validationSchemas.normalValidation
        }
        onSubmit={async (values, formikBag) => {
          setIsPlacingOrder(true)
          const result = await placeOrder(values)
          if (result.success) {
            result.paymentGateway === ""
              ? navigate("/app/ordering-result/basic")
              : (window.location.href = result.paymentGateway)
          } else {
            setIsPlacingOrder(false)
            toastDispatcher(
              ToastType.ERROR,
              errorMessageBuilder(ErrorContext.ORDERING, result)
            )
          }
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            {isPlacingOrder && (
              <LoadingOverlay
                className={styles.overlay}
                message={
                  formik.values.paymentType === "Card"
                    ? "Conectando con proveedor de pagos..."
                    : "Estableciendo pedido..."
                }
              />
            )}
            <div className="d-flex flex-md-row flex-column gap-3">
              <BargasTextField
                label="Nombre completo"
                name="clientName"
                type="text"
                placeholder="Escribe tu nombre aquí"
              />
              <BargasTextField
                label="Email"
                name="email"
                type="email"
                placeholder="bob@email.com"
              />
            </div>

            <div className="d-flex gap-3 flex-md-row flex-column">
              <BargasTextField
                label="Teléfono"
                name="phone"
                type="tel"
                placeholder="88888888"
              />
              <BargasSelectField
                id="province"
                label="Provincia"
                name="province"
              >
                <option value="Cartago">Cartago</option>
              </BargasSelectField>
            </div>

            <BargasTextAreaField
              label="Dirección"
              name="address"
              placeholder="Escribe tu dirección de entrega aqui"
              rows={5}
            />
            <BargasCheckBoxField
              name="acceptedInvoice"
              handleExtraFields={handleExtraFields}
              checked={withInvoice}
            >
              Quiero recibir factura eléctronica
            </BargasCheckBoxField>
            {withInvoice && (
              <>
                <BargasTextField
                  label="Nombre o razón social"
                  name="invoiceReceiver"
                  type="text"
                  placeholder="Nombre o razón social"
                />
                <div className="d-flex gap-3 flex-md-row flex-column">
                  <BargasSelectField
                    label="Tipo de Identificación"
                    name="idType"
                  >
                    <option value="">Tipo de identificación</option>
                    <option value="fisica">Cédula física</option>
                    <option value="juridica">Cédula juridica</option>
                    <option value="dimex">Dimex</option>
                    <option value="NITE">NITE</option>
                  </BargasSelectField>
                  <BargasTextField
                    label="Número de identificación"
                    name="idNumber"
                    type="text"
                    placeholder="9999999"
                  />
                </div>
              </>
            )}
            <br />
            <CartDivider text="Medio de pago" />
            <BargasRadioButton
              id="Tarjeta"
              type="radio"
              name="paymentType"
              label="Tarjeta"
              value="Card"
              defaultChecked
            />
            <BargasRadioButton
              id="Efectivo"
              type="radio"
              name="paymentType"
              label="Efectivo"
              value="Cash"
            />
            <CartTotalSummary focusErrors={() => focusErrors(formik.errors)} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ClientInfoForm
