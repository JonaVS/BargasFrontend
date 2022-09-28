import React from "react"
import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai"
import LinkBtn from "../../../../shared/components/LinkBtn/LinkBtn"
import * as styles from "./orderingResultMsg.module.css"

const OrderingResultMsg = ({ type }) => {
  const message =
    type === "success"
    ? "¡Pedido generado correctamente!"
    : "No se ha podido procesar el pedido"

  const icon = 
    type === "success" 
    ? ( <AiOutlineCheckCircle size={60} className={styles.icon} /> ) 
    : ( <AiOutlineWarning size={60} className={styles.icon} color="red" /> )

  return (
    <div className={styles.msgBody}>
      {icon}
      <h2>{message}</h2>
      <LinkBtn to="/">Aceptar</LinkBtn>
    </div>
  )
}

OrderingResultMsg.defaultProps = {
  type: "success",
}

export default OrderingResultMsg
