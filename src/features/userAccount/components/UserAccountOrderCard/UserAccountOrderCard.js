import React, { useState } from "react"
import { Card, Col } from "react-bootstrap"
import OrderDetailsModal from "../OrderDetailsModal/OrderDetailsModal";
import * as styles from './userAccountOrderCard.module.css'

const UserAccountOrderCard = ({order}) => {
  const [showModal, setShowModal] = useState(false)
  
  const handleShowDetailsModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Col as='li' className="mb-4">
        <Card className={styles.orderCard}>
          <Card.Header as="div" className={styles.cardHeader}>
            <p>Orden: {order.orderId} </p>
            <p>Fecha: {new Date(order.date).toLocaleString({ hour12: true })}</p>
          </Card.Header>
          <Card.Body>
            <button className={styles.detailsBtn} onClick={handleShowDetailsModal}>Detalles</button>
          </Card.Body>
        </Card>
      </Col>
      <OrderDetailsModal show={showModal} close={handleShowDetailsModal} order={order}/>
    </>
  )
}

UserAccountOrderCard.defaultProps = {
  order: {},
}

export default UserAccountOrderCard
