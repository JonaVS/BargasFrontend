import React from "react"
import * as styles from "../TestField/testField.module.css"

const TestField = () => {
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.flexChild}>
          <label className={styles.testLabel} htmlFor="test1">
            Nombre completo
          </label>
          <input className={styles.inputTest} name="test1" />
        </div>
        <div className={styles.flexChild}>
          <label className={styles.testLabel} htmlFor="test1">
            Email
          </label>
          <input className={styles.inputTest} name="test1" />
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.flexChild}>
          <label className={styles.testLabel} htmlFor="test1">
            Telefono
          </label>
          <input className={styles.inputTest} name="test1" />
        </div>
        <div className={styles.flexChild}>
          <label className={styles.testLabel} htmlFor="test1">
            Provincia
          </label>
          <input className={styles.inputTest} name="test1" />
        </div>
      </div>

      <div className={styles.flexChild}>
        <label className={styles.testLabel} htmlFor="test1">
          Dirección
        </label>
        <input className={styles.inputTest} name="test1" />
      </div>
    </>
  )
}

export default TestField
