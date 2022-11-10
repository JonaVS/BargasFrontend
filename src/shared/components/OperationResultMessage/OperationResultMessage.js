import React from "react"
import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai"
import LinkBtn from '../LinkBtn/LinkBtn'
import * as styles from "./operationResultMessage.module.css"

const OperationResultMessage = ({ type, message, to }) => {

  const icon = 
    type === "success" 
    ? ( <AiOutlineCheckCircle size={60} className={styles.icon} /> ) 
    : ( <AiOutlineWarning size={60} className={styles.icon} color="red" /> )

  return (
    <div className={styles.msgBody}>
      {icon}
      <h2>{message}</h2>
      <LinkBtn link={to}>Aceptar</LinkBtn>
    </div>
  )
}

OperationResultMessage.defaultProps = {
  type: "success",
  message: "Default message",
  to: '/'
}

export default OperationResultMessage
