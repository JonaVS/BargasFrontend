import React from "react"
import * as styles from "./userAccountModule.module.css"

const UserAccountModule = ({ children }) => {
  return <div className={styles.accountModule}>{children}</div>
}

export default UserAccountModule
