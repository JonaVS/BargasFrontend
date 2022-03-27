import React from "react"
import Col from "react-bootstrap/Col"
import * as styles from "../ColumnItem/columnItem.module.css"

const ColumnItem = ({ children, icon = null, leftIcon = false }) => {
  return (
    <Col
      className={`${styles.col} ${leftIcon ? styles.leftIcon : styles.topIcon}`}
    >
      {icon}
      {children}
    </Col>
  )
}

export default ColumnItem
