import React from "react"
import LinkBtn from "../LinkBtn/LinkBtn"
import * as styles from "./noContentMessage.module.css"

const NoContentMessage = ({
  message,
  link,
  linkText,
  messageClass,
  linkClass,
}) => {
  return (
    <div className={`${styles.wrapper} ${messageClass}`}>
      <h3>{message}</h3>
      {link && (
        <LinkBtn link={link} className={linkClass}>
          {linkText}
        </LinkBtn>
      )}
    </div>
  )
}

NoContentMessage.defaultProps = {
  message: "No hay resultados",
  linkClass: "",
  messageClass: ""
}

export default NoContentMessage
