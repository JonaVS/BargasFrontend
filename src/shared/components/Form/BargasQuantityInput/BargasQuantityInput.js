import React from "react"
import { useField } from "formik"
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi"
import { motion } from "framer-motion"
import * as styles from "./bargasQuantityInput.module.css"

//START--Framer motion variants--START
const quantityBtn = {
  tap: { scale: 0.7 } 
}
//END--Framer motion variants--END

const BargasQuantityInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  
  const handleKeyPress = e => {
    if (
      isNaN(parseInt(e.key, 10)) &&
      e.key !== "Backspace" &&
      e.key !== "Enter"
    ) {
      e.preventDefault()
    }
  }

  const quantityOnChange = e => {
    if (e.currentTarget.name === "minusItem") {
      if (parseInt(meta.value) - 1 < 1) {
        helpers.setValue(1)
      } else {
        helpers.setValue(parseInt(meta.value) - 1)
      }
    }
    if (e.currentTarget.name === "plusItem") {
      helpers.setValue(parseInt(meta.value) + 1)
    }

    if (e.currentTarget.name === "quantity") {
      helpers.setValue(
        parseInt(e.currentTarget.value) <= 0 || e.currentTarget.value === ""
          ? 1
          : e.currentTarget.value
      )
    }
  }

  return (
    <div className={styles.quantityInput}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <div className={styles.inputWrapper}>
        <motion.button
          variants={quantityBtn}
          whileTap="tap"
          type="button"
          onClick={quantityOnChange}
          name="minusItem"
        >
          <FiMinusSquare className={styles.icon} />
        </motion.button>
        <input
          {...field}
          {...props}
          className={styles.inputArea}
          onChange={quantityOnChange}
          onKeyPress={handleKeyPress}
          disabled
        />
        <motion.button
          variants={quantityBtn}
          whileTap="tap"
          type="button"
          onClick={quantityOnChange}
          name="plusItem"
        >
          <FiPlusSquare className={styles.icon} />
        </motion.button>
      </div>
    </div>
  )
}

export default BargasQuantityInput

