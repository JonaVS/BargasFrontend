import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaClipboardList, FaMotorcycle } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import * as styles from "../OrderingCols/orderingCols.module.css"

const OrderingCols = ({ colData }) => {
  return (
    <Container className={styles.mainCont}>
      <Row className="justify-content-center">
        <Col  lg={true} className={`${styles.col}`}>
          <FaClipboardList className={styles.icon}/>
          <p>
            {colData.onlineOrdering}
          </p>
        </Col>
        <Col lg={true} className={`${styles.col}`}>
          <FaMotorcycle className={styles.icon}/>
          <p>
            {colData.delivery}
          </p>
        </Col>
        <Col lg={true} className={`${styles.col}`}>
          <BsFillChatDotsFill className={styles.icon}/>
          <p>
            {colData.chatHelp}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

OrderingCols.defaultProps = {
  colData: {}
}

export default OrderingCols
