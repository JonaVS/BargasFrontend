import React from "react"
import LinkBtn from '../../../shared/components/LinkBtn/LinkBtn'
import * as styles from "./emptyCartMsg.module.css"

const EmptyCartMsg = ({ msg }) => {
  return (
    <div className={styles.msgContainer}>
      <p className={styles.msg}>{msg}</p>
      <LinkBtn link='/menu' className={styles.link}>Menú</LinkBtn>
    </div>
  )
}

EmptyCartMsg.defaultProps = {
    msg: 'This is a default text',
}

export default EmptyCartMsg
