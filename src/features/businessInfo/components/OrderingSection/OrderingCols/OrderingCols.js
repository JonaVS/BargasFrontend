import React from "react"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { FaClipboardList, FaMotorcycle } from "react-icons/fa"
import { BsFillChatDotsFill } from "react-icons/bs"
import * as styles from "../OrderingCols/orderingCols.module.css"

//START--Framer motion variants--START
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
}
//END--Framer motion variants--END

const OrderingCols = ({ colData }) => {
  return (
    <Container className={styles.mainCont}>
      <Row
        as={motion.div}
        className="justify-content-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ fallback: true, once: true }}
      >
        <Col as={motion.div} lg={true} className={styles.col} variants={item}>
          <FaClipboardList className={styles.icon} />
          <p>{colData.onlineOrdering}</p>
        </Col>
        <Col as={motion.div} lg={true} className={styles.col} variants={item}>
          <FaMotorcycle className={styles.icon} />
          <p>{colData.delivery}</p>
        </Col>
        <Col as={motion.div} lg={true} className={styles.col} variants={item}>
          <BsFillChatDotsFill className={styles.icon} />
          <p>{colData.chatHelp}</p>
        </Col>
      </Row>
    </Container>
  )
}

OrderingCols.defaultProps = {
  colData: {},
}

export default OrderingCols
