import React from "react"
import { Spinner } from "react-bootstrap"
import * as styles from "./loadingOverlay.module.css"

const LoadingOverlay = ({ className, msgContClass, message }) => {
  return (
    <div className={`${styles.loadingOverlay} ${className}`}>
      <Spinner animation="border" role="status" variant="warning" />
      {message && (
        <div className={`${styles.msgContainer} ${msgContClass}`}>
          <span>{message}</span>
        </div>
      )}
    </div>
  )
}
LoadingOverlay.defaultProps = {
  className: "",
  msgContClass: "",
  message: null,
}

export default LoadingOverlay
