import React from "react"
import { useField } from "formik"
import * as styles from "../BargasCheckBoxField/BargasCheckBoxField.module.css"

const BargasCheckBoxField = ({ children, handleExtraFields, ...props }) => {
  const [field, meta, helpers] = useField({ ...props, type: "checkbox" })

  const handleChange = () => {
    helpers.setValue(!field.value)
    if (handleExtraFields) handleExtraFields()
  }

  return (
    <>
      <br />
      <div>
        <label className={styles.container}>
          <input
            type="checkbox"
            {...field}
            {...props}
            onChange={handleChange}
          />
          <span className={styles.checkmark}></span>
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </>
  )
}

export default BargasCheckBoxField
