import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaClipboardList, FaMotorcycle } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import * as styles from "../OrderingCols/orderingCols.module.css"

const OrderingCols = () => {
  return (
    <Container className={styles.mainCont}>
      <Row className="justify-content-center">
        <Col  lg={true} className={`${styles.col}`}>
          <FaClipboardList className={styles.icon}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
        <Col lg={true} className={`${styles.col}`}>
          <FaMotorcycle className={styles.icon}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
        <Col lg={true} className={`${styles.col}`}>
          <BsFillChatDotsFill className={styles.icon}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderingCols
