import React from "react"
import Modal from "react-bootstrap/Modal"
import Badge from "react-bootstrap/Badge"
import { GatsbyImage } from "gatsby-plugin-image"
import *as styles from "./editProductModal.module.css"
import ProductForm from "../../../../shared/components/Form/ProductForm/ProductForm"

const EditProductModal = ({ showModal, onHide, product, currentSort }) => {
  return (
    <>
      <Modal
        contentClassName="p-0 border-0"
        centered
        show={showModal}
        onHide={onHide}
      >
        <Modal.Header className={styles.modalHeader} closeButton>
          <h4 className={styles.modalTittle}>
            <span className={styles.productName}>{product.name}</span>
            <Badge bg="success" className="ms-2 fw-normal">
              ₡ {new Intl.NumberFormat("CRC").format(product.price)}
            </Badge>
          </h4>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {product.qualityImg && (
            <GatsbyImage alt="Product image" image={product.qualityImg} />
          )}
          <div className={styles.formWrapper}>
            <ProductForm
              productData={product}
              isEditMode
              handleCloseEditModal={onHide}
            />
          </div>
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
