import React from "react"
import { Spinner } from "react-bootstrap"
import * as styles from "./loadingOverlay.module.css"

const LoadingOverlay = ({ className }) => {
  return (
    <div className={`${styles.loadingOverlay} ${className}`}>
      <Spinner animation="border" role="status" variant="warning">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}
LoadingOverlay.defaultProps = {
  className: "",
}

export default LoadingOverlay
