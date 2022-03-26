import React from "react"
import Modal from "react-bootstrap/Modal"
import Badge from "react-bootstrap/Badge"
import { GatsbyImage } from "gatsby-plugin-image"
import EditProductForm from "../EditProductForm/EditProductForm"
import *as styles from "./editProductModal.module.css"

const EditProductModal = ({ showModal, onHide, product, currentSort }) => {
  return (
    <>
      <Modal contentClassName="p-0 border-0" centered show={showModal} onHide={onHide}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <h4 className={styles.modalTittle}>
            <span className={styles.productName}>{product.name}</span>
            <Badge bg="success" className="ms-2 fw-normal">
              ₡ {new Intl.NumberFormat("CRC").format(product.price)}
            </Badge>
          </h4>
        </Modal.Header>
        <Modal.Body className="p-0 bg-dark border-0">
          {product.qualityImg && (
            <GatsbyImage alt="Product image" image={product.qualityImg} />
          )}
          <EditProductForm
            handleCloseModal={onHide}
            productData={product}
            currentSort={currentSort}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

EditProductModal.defaultProps = {
  showModal: () => {},
  onHide: () => {},
  handleEdit: () => {},
  product: {},
  currentSort: "1",
}

export default EditProductModal
