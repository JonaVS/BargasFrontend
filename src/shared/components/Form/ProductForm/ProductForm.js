import React, { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { Form, Formik } from "formik"
import { helper } from "../../../../helpers/productFormHelpers"
import BargasQuantityInput from "../BargasQuantityInput/BargasQuantityInput"
import RadioGroupWrapper from "../RadioGroupWrapper/RadioGroupWrapper"
import BargasRadioButton from "../BargasRadioButton/BargasRadioButton"
import BargasTextAreaField from "../BargasTextAreaField/BargasTextAreaField"
import { Button } from "react-bootstrap"
import * as styles from "./productForm.module.css"

const ProductForm = ({
  productData,
  isEditMode,
  handleCloseEditModal,
}) => {
    const {addToCart, editCartItem} = useContext(CartContext)
    const productOptions = [
      productData.sides.data,
      productData.mains.data,
      productData.sauces.data,
      productData.sizes.data,
    ]
  return (
    <Formik
      initialValues={helper.getInitialValues(productData, isEditMode)}
      onSubmit={(values, formikBag) => {
        values.subTotal = helper.getSubTotal(productData, values)
        isEditMode
          ? editCartItem(productData, values, handleCloseEditModal)
          : addToCart(productData, values)
      }}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <BargasQuantityInput label="Cantidad" type="number" name="quantity" />
          {productOptions.map(
            (optionsGroup, groupIndex) =>
              optionsGroup.length > 0 && (
                <RadioGroupWrapper
                  key={groupIndex}
                  label={helper.getRadioGroupInfo(groupIndex, "getLabel")}
                >
                  {optionsGroup.map((item, groupItemIndex) => (
                    <BargasRadioButton
                      key={item.id}
                      id={item.attributes.name}
                      type="radio"
                      name={helper.getRadioGroupInfo(groupIndex, "getName")}
                      label={item.attributes.name}
                      value={item.attributes.name}
                      defaultChecked={helper.isCheckedByDefault(
                        isEditMode,
                        productData,
                        { itemName: item.attributes.name, itemIdx: groupItemIndex }
                      )}
                    />
                  ))}
                </RadioGroupWrapper>
              )
          )}
          <BargasTextAreaField
            label="Solicitud especial"
            name="extraInfo"
            placeholder="Escribe en este espacio si deseas eliminar alguno de los ingredientes mostrados"
            wrapperClass={styles.textArea}
            rows="5"
          />
          <span className={styles.subTotal}>
            Subtotal: ₡{" "}
            {new Intl.NumberFormat("CRC").format(
              helper.getSubTotal(productData, formik.values)
            )}
          </span>
          {!isEditMode ? (
            <button className={styles.submitBtn}>Ordenar</button>
          ) : (
            <div className={styles.actions}>
              <Button variant="success" type="submit">
                Actualizar
              </Button>
              <Button
                variant="danger"
                onClick={handleCloseEditModal}
              >
                Cerrar
              </Button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  )
}

ProductForm.defaultProps = {
  productData: {},
  isEditMode: false,
  handleCloseEditModal: () => {},
}

export default ProductForm
