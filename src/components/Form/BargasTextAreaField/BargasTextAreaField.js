import React from "react"
import { useField } from "formik"
import * as styles from "../formFields.module.css"

const BargasTextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className={styles.inputWrapper}>
        <label className={styles.formLabel} htmlFor={props.id || props.name}>
          {label}
        </label>
        <textarea className={styles.textArea} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}

export default BargasTextAreaField
