import React from "react"
import * as styles from "../FixedComponent/fixedComponent.module.css"

const FixedComponent = ({ children, className = "" }) => {
  return <div className={`${styles.fixed} ${className}`}>{children}</div>
}

export default FixedComponent
