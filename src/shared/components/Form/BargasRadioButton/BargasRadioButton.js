import { useField } from "formik"
import React from "react"
import *as styles from './bargasRadioButton.module.css'

const BargasRadioButton = ({label,...props}) => {
  const [field] = useField(props)
  delete field['checked']
  return (
    <div className={styles.customRadio}>
      <input {...field} {...props}/>
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

BargasRadioButton.defaultProps = {
  label: "Default",
  name: "Default",
}

export default BargasRadioButton
