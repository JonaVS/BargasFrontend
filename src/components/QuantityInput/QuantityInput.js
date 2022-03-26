import React from "react"
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi"
import * as styles from "../QuantityInput/quantityInput.module.css"

const QuantityInput = ({ value, onChange }) => {
  const handleKeyPress = e => {
    if (
      isNaN(parseInt(e.key, 10)) &&
      e.key !== "Backspace" &&
      e.key !== "Enter"
    ) {
      e.preventDefault()
    }
  }

  return (
    <div className={styles.quantityInput}>
      <label htmlFor="quantity">Cantidad </label>
      <div className={styles.inputWrapper}>
        <button type="button" onClick={onChange} name="minusItem">
          <FiMinusSquare className={styles.icon} />
        </button>
        <input
          type="number"
          id="quantity"
          name="quantityInput"
          min={1}
          max={100}
          className={styles.inputArea}
          value={value && Math.max(0, value)}
          onChange={onChange}
          onKeyPress={handleKeyPress}
        />
        <button type="button" onClick={onChange} name="plusItem">
          <FiPlusSquare className={styles.icon} />
        </button>
      </div>
    </div>
  )
}

QuantityInput.defaultProps = {
  value: 0,
  onChange: () => {},
}

export default QuantityInput
