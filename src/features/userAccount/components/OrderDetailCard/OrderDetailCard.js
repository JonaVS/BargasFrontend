import React from "react"
import { Badge } from "react-bootstrap"
import { currencyFormatter } from "../../../../helpers/currencyFormatter"
import * as styles from "./orderDetailCard.module.css"

const OrderDetailCard = ({ orderDetail }) => {
  return (
    <li className={styles.orderDetailCard}>
      <div
        className={styles.imgWrapper}
        style={{
          backgroundImage:
            `url(${orderDetail.product.image.formats.thumbnail.url})`,
        }}
      />
      <div className={styles.productDetails}>
        <p>
          <span className={styles.productName}>
            {`${orderDetail.product.name} (x${orderDetail.quantity})`}
          </span>
          <Badge as="span" bg="success" className={styles.priceBadge}>
            {`₡ ${currencyFormatter(orderDetail.price)}`}
          </Badge>
        </p>
        <p>
          <span>{`${orderDetail.main} ${orderDetail.side} ${orderDetail.sauce}`}</span>
        </p>
        <p>{`Subtotal: ${currencyFormatter(orderDetail.total)}`}</p>
      </div>
    </li>
  )
}

OrderDetailCard.defaultProps = {
  orderDetail: {},
}

export default OrderDetailCard
