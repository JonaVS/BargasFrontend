import React, { useState } from "react"
import { Form, Formik } from "formik"
import validationSchemas from "../ClientInfoForm/YupValidations"
import BargasTextField from "../../../../shared/components/Form/BargasTextField/BargasTextField"
import BargasTextAreaField from "../../../../shared/components/Form/BargasTextAreaField/BargasTextAreaField"
import BargasSelectField from "../../../../shared/components/Form/BargasSelectField/BargasSelectField"
import BargasCheckBoxField from "../../../../shared/components/Form/BargasCheckBoxField/BargasCheckboxField"
import CartTotalMobile from "../../../cart/CartTotalMobile/CartTotalMobile"
import { ConnectedFocusError } from "focus-formik-error"

const ClientInfoForm = () => {
  const [withInvoice, setWithInvoice] = useState(false)

  const handleExtraFields = () => setWithInvoice(!withInvoice)

  function focusErrors(errors) {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      const el = document.getElementsByName(errorKeys[0])[0]
      el.scrollIntoView({ behavior: 'smooth', block: 'start'});
      el.focus();
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
          province: "",
          acceptedInvoice: false,
          invoiceReceiver: "",
          idType: "",
          idNumber: "",
        }}
        validationSchema={
          withInvoice
            ? validationSchemas.validationWithEInvoice
            : validationSchemas.normalValidation
        }
        onSubmit={(values, formikBag) => {console.log(formikBag)} }
        validateOnMount={true}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <ConnectedFocusError/>
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
              <BargasSelectField label="Provincia" name="province">
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
            <CartTotalMobile
              focusErrors={() => focusErrors(formik.errors)}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ClientInfoForm
