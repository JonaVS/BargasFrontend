import React from "react"
import { Badge, Button, Modal } from "react-bootstrap"
import * as styles from "./productModalDetails.module.css"

const ProductDetailsModal = ({ show, close, item }) => {
  return (
    <Modal
      show={show}
      centered
      contentClassName={styles.content}
      onHide={close}
    >
      <Modal.Header
        className={styles.modalHeader}
        closeButton
        closeVariant="white"
      >
        <Modal.Title>
          {item.name}
          <Badge bg="success" className="fw-normal ms-1 p-1 fs-6">
            {`₡ ${new Intl.NumberFormat("CRC").format(item.price)}`}
          </Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <h2>Descripción</h2>
        <p>{item.description}</p>
        <br />
        <h2>Ingredientes</h2>
        <p>{item.ingredients}</p>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="outline-danger" onClick={close}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ProductDetailsModal.defaultProps = {
  item: {
    name: "Menu Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
}

export default ProductDetailsModal
