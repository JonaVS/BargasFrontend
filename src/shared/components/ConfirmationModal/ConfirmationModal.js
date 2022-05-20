import React from "react"
import { Button, Modal } from "react-bootstrap"
import * as styles from "./confirmationModal.module.css"

const ConfirmationModal = ({
  message,
  contextTitle,
  actionText,
  positive,
  show,
  close,
  action,
}) => {
  return (
    <>
      <Modal
        contentClassName={styles.content}
        backdrop='static'
        centered
        show={show}
        onHide={close}
      >
        <Modal.Header
          className={styles.modalHeader}
          closeButton
          closeVariant="white"
        >
          <Modal.Title>{contextTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>{message}</Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button
            variant={positive ? "outline-success" : "outline-danger"}
            onClick={action}
          >
            {actionText}
          </Button>
          <Button variant="outline-secondary" onClick={close}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

ConfirmationModal.defaultProps = {
  message: "Deseas eliminar el item xxxxx?",
  contextTitle: "Eliminar Item",
  actionText: "Eliminar",
  positive: false,
  show: false,
  action: () => {},
}

export default ConfirmationModal
