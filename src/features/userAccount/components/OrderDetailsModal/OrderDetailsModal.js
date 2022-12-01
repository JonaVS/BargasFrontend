import React from "react"
import {Button, Modal } from "react-bootstrap"
import OrderDetailCardList from "../OrderDetailCardList/OrderDetailCardList"
import OrderGeneralInfo from "../OrderGeneralInfo/OrderGeneralInfo"
import OrderTotalSummary from "../OrderTotalSummary/OrderTotalSummary"
import * as styles from "./orderDetailsModal.module.css"

const OrderDetailsModal = ({ show, close, order }) => {
  
  const totalData = {
    deliveryCost: order.deliveryCost,
    subtotal: order.subtotal,
    total: order.total,
  }

  return (
    <Modal
      show={show}
      centered
      contentClassName={styles.content}
      onHide={close}
      restoreFocus={false}
    >
      <Modal.Header
        className={styles.modalHeader}
        closeButton
        closeVariant="white"
      >
        <Modal.Title>{`Orden: ${order.orderId}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <OrderGeneralInfo order={order}/>
        <OrderDetailCardList orderDetails={order.orderDetails}/>
        <OrderTotalSummary totalData={totalData}/>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="outline-danger" onClick={close}>
          Cerrar 
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

OrderDetailsModal.defaultProps = {
  show: false,
  close: () => {},
  order: {}
}

export default OrderDetailsModal
