import React from "react"
import { Button, Modal } from "react-bootstrap"
import * as styles from "./eventsDetailsModal.module.css"

const EventDetailsModal = ({ show, close, event }) => {
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
        <Modal.Title>{event.attributes.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <p>{`Desde: ${new Date(event.attributes.startDate).toLocaleDateString()}`}</p>
        <p>{`Hasta: ${new Date(event.attributes.endDate).toLocaleDateString()}`}</p>
        <p className={styles.modalDesc}>{event.attributes.description}</p>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="outline-danger" onClick={close}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

EventDetailsModal.defaultProps = {
  event: {
    attributes: {
      title: "Defaul event title",
      description: "Default description",
      startDate: "12/12/2022",
      endDate: "12/20/2022",
    },
  }
}

export default EventDetailsModal
