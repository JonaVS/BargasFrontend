import React from "react"
import { useField } from "formik"
import * as styles from "../formFields.module.css"

const BargasTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className={styles.inputWrapper}>
        <label className={styles.formLabel} htmlFor={props.id || props.name}>
          {label}
        </label>
        <input className={styles.textField} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}

export default BargasTextField
