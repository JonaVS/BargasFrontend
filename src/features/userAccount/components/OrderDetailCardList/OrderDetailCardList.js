import React from "react"
import OrderDetailCard from "../OrderDetailCard/OrderDetailCard"
import * as styles from "./orderDetailCardList.module.css"

const OrderDetailCardList = ({ orderDetails }) => {
  return (
    <div className={styles.detailsCardList}>
      <h2>Pedido</h2>
      <ul className={styles.orderDetailsList}>
        {orderDetails.map(orderDetail => (
          <OrderDetailCard key={orderDetail.id} orderDetail={orderDetail} />
        ))}
      </ul>
    </div>
  )
}

OrderDetailCardList.defaultProps = {
  orderDetails: [],
}

export default OrderDetailCardList
