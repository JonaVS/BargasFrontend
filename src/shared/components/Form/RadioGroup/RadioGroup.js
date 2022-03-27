import React from "react"
import * as styles from "./radioGroup.module.css"

const RadioButton = ({ label, name, onChange, value, defaultChecked }) => {
  return (
    <div className={styles.customRadio}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        id={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

RadioButton.defaultProps = {
  label: "default",
  name: "default",
  onchange: () => {},
  defaultChecked: false,
  value: "default",
}

export default RadioButton
