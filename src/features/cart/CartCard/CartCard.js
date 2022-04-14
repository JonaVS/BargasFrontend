import React, { useState } from "react"
import Fade from "react-bootstrap/Fade"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import * as styles from "../CartCard/cartCard.module.css"

const CartCard = ({ product, handleEdit, handleDelete }) => {
  const [show, setShow] = useState(true)

  return (
    <Fade
      in={show}
      unmountOnExit={true}
      onExited={() => handleDelete(product.inCartId)}
      timeout={500}
    >
      <div className={styles.cartCard}>
        <div className={styles.infoWrapper}>
          <div
            className={styles.imgWrapper}
            style={{ backgroundImage: `url(${product.thumbnail})`}}
          >
            <div className={styles.itemCount}>{product.quantity}</div>
          </div>
          <div className={styles.itemData}>
            <h3 className={styles.itemTittle}>
              {product.name}
            </h3>
            <Badge bg="success" className='fw-normal p-1 fs-6'>{`₡ ${product.price}`}</Badge>
            <p style={{ color: "#fff" }}>
            {`${product.main && product.main + ' -'} ${product.side}`}
            </p>
            <p style={{ color: "#fff" }}>
              {product.extraInfo === '' ? 'Sin instrucciones especiales' : product.extraInfo}
            </p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div>
            <Button
              onClick={() => {
                setShow(false)
              }}
              variant="danger"
              size="sm"
              className="p-1 me-1"
            >
              Eliminar
            </Button>
            <Button
              variant="dark"
              size="sm"
              className="p-1"
              onClick={() => handleEdit(product)}
            >
              Editar
            </Button>
          </div>
          <span className={styles.subTotal}>Subtotal: ₡ {product.subTotal}</span>
        </div>
      </div>
    </Fade>
  )
}

CartCard.defaultProps = {
  product: {},
  handleEdit: () => {},
  handleDelete: () => {}
}

export default CartCard
