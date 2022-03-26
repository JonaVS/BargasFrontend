import React, { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { useGetProductDefaults } from "../../customHooks/useGetProductDefaults"
import { cartItemBuilder } from "../../helpers/productFormHelpers"
import QuantityInput from "../QuantityInput/QuantityInput"
import RadioButton from "../RadioGroup/RadioGroup"
import { toast } from "react-toastify"
import * as styles from "../ProductForm/productForm.module.css"

const ProductForm = ({ productData, available }) => {
  const [quantity, setQuantity] = useState(1)
  const [sideItem, setSideItem] = useState("")
  const [mainItem, setMainItem] = useState("")
  const [extraInfo, setExtraInfo] = useState("")
  const [subTotal, setSubtotal] = useState(0)

  const { cart, setCart } = useContext(CartContext)
  const [side, mainIng] = useGetProductDefaults(productData)

  useEffect(() => {
    //Set the default pre-selected option for product sides, extras, sauces etc if applicable.
    setMainItem(mainIng)
    setSideItem(side)
    setSubtotal(productData.precio)
  }, [mainIng, side, productData.precio])

  useEffect(() => {
    setSubtotal(quantity * productData.precio)
  }, [quantity, productData.precio])

  const handleChange = e => {
    if (e.target.name === "mainIng") {
      setMainItem(e.target.value)
    } else {
      setSideItem(e.target.value)
    }
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
  }

  const infoOnChange = e => {
    setExtraInfo(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    let formData = {
      quantity: quantity,
      sideItem: sideItem,
      mainItem: mainItem,
      extraInfo: extraInfo,
      subTotal: subTotal,
    }

    const cartItem = cartItemBuilder(productData, formData)

    console.log(cartItem)
    setCart([...cart, cartItem])
    toast(`${productData.nombre} x ${quantity} agregado.`, {
      className: "toastAdd",
      progressClassName: "toastAddBar",
      autoClose: 50000,
    })
  }

  if (!available) return <></>

  return (
    <form onSubmit={onSubmit}>
      <QuantityInput value={quantity} onChange={quantityOnChange} />
      {productData.ing_principales.length > 0 && (
        <div className={styles.radioGroup}>
          <h2>Ingrediente principal</h2>
          {productData.ing_principales.map((item, index) => (
            <RadioButton
              key={item.id}
              label={item.nombre}
              name="mainIng"
              value={item.nombre}
              defaultChecked={index === 0 ? true : false}
              onChange={handleChange}
            />
          ))}
        </div>
      )}
      {productData.acompanamientos.length > 0 && (
        <div className={styles.radioGroup}>
          <h2>Acompanamientos</h2>
          {productData.acompanamientos.map((item, index) => (
            <RadioButton
              key={item.id}
              label={item.nombre}
              name="side"
              value={item.nombre}
              defaultChecked={index === 0 ? true : false}
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
        className={styles.textArea}
        onChange={infoOnChange}
      ></textarea>

      <span className={styles.subTotal}>
        Subtotal: ₡ {new Intl.NumberFormat("CRC").format(subTotal)}
      </span>
      {available && (
        <button type="submit" className={styles.submitBtn}>
          Ordenar
        </button>
      )}
    </form>
  )
}

ProductForm.defaultProps = {
  productData: [{}],
  available: false,
}

export default ProductForm
