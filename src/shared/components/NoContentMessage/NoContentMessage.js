import React from "react"
import LinkBtn from "../LinkBtn/LinkBtn"
import * as styles from "./noContentMessage.module.css"

const NoContentMessage = ({
  message,
  link,
  linkText,
  linkCallback,
  messageClass,
  linkClass,
}) => {
  return (
    <div className={`${styles.wrapper} ${messageClass}`}>
      <h3>{message}</h3>
      {link && (
        <LinkBtn callback={linkCallback} link={link} className={linkClass}>
          {linkText}
        </LinkBtn>
      )}
    </div>
  )
}

NoContentMessage.defaultProps = {
  message: "No hay resultados",
  linkClass: "",
  messageClass: "",
  linkCallback: () => {}
}

export default NoContentMessage
