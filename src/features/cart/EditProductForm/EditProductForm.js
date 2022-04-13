import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import QuantityInput from "../../../shared/components/Form/QuantityInput/QuantityInput"
import RadioButton from "../../../shared/components/Form/RadioGroup/RadioGroup"
import Button from "react-bootstrap/Button"
import { cartSort } from "../../../helpers/cartSort"
import { toast } from "react-toastify"
import * as styles from "../../menu/ProductForm/productForm.module.css"


const EditProductForm = ({ productData, handleCloseModal, currentSort }) => {
  const [quantity, setQuantity] = useState(productData.quantity)
  const [sideItem, setSideItem] = useState(productData.sideItem)
  const [mainItem, setMainItem] = useState(productData.mainItem)
  const [extraInfo, setExtraInfo] = useState(productData.extraInfo)
  const [subTotal, setSubtotal] = useState(0)
  const [disabledBtn, setDisabledBtn] = useState(true)

  const {cart, setCart} = useContext(CartContext)

  useEffect(() => {
    setSubtotal(quantity * productData.price)
  }, [quantity, productData.price])

  const handleChange = e => {
    if (e.target.name === "mainIng") {
      setMainItem(e.target.value)
    } else {
      setSideItem(e.target.value)
    }
    setDisabledBtn(false)
  }

  const quantityOnChange = e => {
    if (e.currentTarget.name === "minusItem") {
      if (parseInt(quantity) - 1 < 1) {
        setQuantity(1)
      } else {
        setQuantity(parseInt(quantity) - 1)
      }
    }
    if (e.currentTarget.name === "plusItem") {
      setQuantity(parseInt(quantity) + 1)
    }

    if (e.currentTarget.name === "quantityInput") {
      setQuantity(
        parseInt(e.currentTarget.value) <= 0 || e.currentTarget.value === ""
          ? 1
          : e.currentTarget.value
      )
    }
    setDisabledBtn(false)
  }

  const infoOnChange = e => {
    setExtraInfo(e.target.value)
    setDisabledBtn(false)
  }

  const handleEdit = product => {
    let updatedCart = cart.map(item => {
      if (item.inCartId === product.inCartId) {
        return {
          ...item,
          quantity: quantity,
          sideItem: sideItem,
          mainItem: mainItem,
          extraInfo: extraInfo,
          subTotal: subTotal,
        }
      }
      return item
    })
    
    const sortedCart = cartSort(updatedCart)
    setCart(sortedCart, currentSort)
    setDisabledBtn(true)
    toast("Item actualizado", {
      className: 'toastAdd',
      progressClassName: 'toastAddBar',
      autoClose: 50000,
    })
  }

  return (
    <form>
      <QuantityInput value={quantity} onChange={quantityOnChange} />
      {productData.mains.length > 0 && (
        <div className={styles.radioGroup}>
          <h2>Ingrediente principal</h2>
          {productData.mains.map(item => (
            <RadioButton
              key={item.id}
              label={item.name}
              name="mainIng"
              value={item.name}
              defaultChecked={
                productData.mainItem === item.name ? true : false
              }
              onChange={handleChange}
            />
          ))}
        </div>
      )}
      {productData.sides.length > 0 && (
        <div className={styles.radioGroup}>
          <h2>Acompanamientos</h2>
          {productData.sides.map((item, index) => (
            <RadioButton
              key={item.id}
              label={item.name}
              name="side"
              value={item.name}
              defaultChecked={productData.sideItem === item.name ? true : false}
              onChange={handleChange}
            />
          ))}
        </div>
      )}
      <label className={styles.formLabel} htmlFor="info">
        Solicitud especial
      </label>
      <textarea
        name="extraInfo"
        id="info"
        rows="5"
        placeholder="Escribe en este espacio si deseas eliminar alguno de los ingredientes mostrados"
        value={extraInfo}
        className={styles.textArea}
        onChange={infoOnChange}
      ></textarea>
      <span className={styles.subTotal}>
        Subtotal: ₡ {new Intl.NumberFormat("CRC").format(subTotal)}
      </span>
      <div className={styles.actions}>
        <Button variant="success" disabled={disabledBtn} onClick={() => handleEdit(productData)}>
          Actualizar
        </Button>
        <Button variant="danger" onClick={handleCloseModal}>
          Cerrar
        </Button>
      </div>
    </form>
  )
}

EditProductForm.defaultProps = {
  productData: [{}],
  handleCloseModal: () => {},
  currentSort: '1'
}

export default EditProductForm
