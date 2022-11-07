import React from "react"
import *as styles from './orderGeneralInfo.module.css'

const OrderGeneralInfo = ({ order }) => {
  return (
    <div className={styles.orderGeneralInfo}>
      <h2>Datos generales:</h2>
      <p><span>Fecha: </span>{new Date(order.date).toLocaleString({hour12: true,})}</p>
      <p><span>Cliente: </span>{order.clientName}</p>
      <p><span>Email: </span>{order.clientEmail}</p>
      <p><span>Provincia: </span>{order.province}</p>
      <p><span>Dirección: </span>{order.address}</p>
      <p><span>Medio de pago: </span>{order.paymentType === "Card" ? "Tarjeta" : "Efectivo"}</p>
    </div>
  )
}

OrderGeneralInfo.defaultProps = {
  order: {},
}

export default OrderGeneralInfo
