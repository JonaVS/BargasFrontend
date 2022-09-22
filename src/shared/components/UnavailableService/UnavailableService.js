import React from "react"
import { RiErrorWarningLine } from "react-icons/ri"
import * as styles from "./unavailableService.module.css"

const UnavailableService = ({ visible, message }) => {
  return (
    <>
      {visible && (
        <div className={styles.unavailableService}>
          <RiErrorWarningLine color="#b02a37" size={30} />
          <span>{message}</span>
        </div>
      )}
    </>
  )
}

UnavailableService.defaultProps = {
  visible: false,
  message: "This is a default message",
}

export default UnavailableService
