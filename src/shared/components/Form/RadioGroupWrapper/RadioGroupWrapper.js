import React from "react"
import * as styles from "./radioGroupWrapper.module.css"

const RadioGroupWrapper = ({ label, className, children }) => {
  return (
    <div className={`${styles.radioGroup} ${className}`}>
      <h2>{label}</h2>
      {children}
    </div>
  )
}

RadioGroupWrapper.defaultProps = {
  label: "Default label",
  className: "",
  children: null
}

export default RadioGroupWrapper
