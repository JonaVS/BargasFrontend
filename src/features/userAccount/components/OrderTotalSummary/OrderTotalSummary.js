import React from "react"
import { currencyFormatter } from "../../../../helpers/currencyFormatter"
import * as styles from "./orderTotalSummary.module.css"

const OrderTotalSummary = ({totalData}) => {  
  return (
    <div className={styles.orderTotalSummary}>
        <h2>Total del pedido</h2>
        <p><span>Subtotal: </span>{currencyFormatter(totalData.subtotal)}</p>
        <p><span>Envio: </span>{currencyFormatter(totalData.deliveryCost)}</p>
        <p><span>TOTAL: </span>{currencyFormatter(totalData.total)}</p>
    </div>
  )
}

OrderTotalSummary.defaultProps = {
  totalData: { subtotal: 4000, deliveryCost: 2000, total: 6000 },
}

export default OrderTotalSummary
