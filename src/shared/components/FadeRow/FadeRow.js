import React, { useState } from "react"
import Fade from "react-bootstrap/Fade"
import Button from "react-bootstrap/Button"
import { TiDeleteOutline } from "react-icons/ti"
import { FiEdit } from "react-icons/fi"
import * as styles from "../FadeRow/fadeRow.module.css"

const FadeRow = ({ item, handleDelete, handleEdit }) => {
  const [show, setShow] = useState(true)

  return (
    <Fade
      in={show}
      unmountOnExit={true}
      onExited={() => handleDelete(item.inCartId)}
      timeout={500}
    >
      <tr>
        <td className={styles.actions}>
          <Button
            variant="custom"
            onClick={() => {
              setShow(false)
            }}
            className={styles.iconBtn}
          >
            <i>
              <TiDeleteOutline className={styles.icon} size={35} />
            </i>
          </Button>
          <Button
            variant="custom"
            className={styles.iconBtn}
            onClick={() => handleEdit(item)}
          >
            <i>
              <FiEdit className={styles.icon} size={30} />
            </i>
          </Button>
        </td>
        <td className={styles.imgCol}>
          <div
            className={styles.imgWrapper}
            style={{ backgroundImage: `url(${item.thumbnail})` }}
          ></div>
        </td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td>{item.subTotal}</td>
      </tr>
    </Fade>
  )
}

FadeRow.defaultProps = {
  item: {},
  handleDelete: () => {},
  handleEdit: () => {},
}

export default FadeRow
