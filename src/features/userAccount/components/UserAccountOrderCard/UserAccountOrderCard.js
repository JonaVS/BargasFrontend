import React, { useState } from "react"
import { Card, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import OrderDetailsModal from "../OrderDetailsModal/OrderDetailsModal"
import Button, { ButtonTypeAnimation } from "../../../../shared/components/Button/Button"
import * as styles from "./userAccountOrderCard.module.css"

//START--Framer motion variants--START
const orderCard = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      type: "spring"
    },
  },
}
//END--Framer motion variants--END

const UserAccountOrderCard = ({ order }) => {
  const [showModal, setShowModal] = useState(false)
  
  const handleShowDetailsModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Col
        as={motion.li}
        variants={orderCard}
        initial="hidden"
        whileInView="show"
        viewport={{ fallback: true, once: true, amount: 0.5 }}
        className="mb-4"
      >
        <Card className={styles.orderCard}>
          <Card.Header as="div" className={styles.cardHeader}>
            <p>Orden: {order.orderId} </p>
            <p>Fecha: {new Date(order.date).toLocaleString({ hour12: true })}</p>
          </Card.Header>
          <Card.Body>
            <Button
              whileHover={ButtonTypeAnimation.MainHover}
              className={styles.detailsBtn}
              onClick={handleShowDetailsModal}
            >
              Detalles
            </Button>
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
