import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { MdLocationOn } from "react-icons/md"
import { BiCurrentLocation } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"
import * as styles from "./aboutCols.module.css"

const AboutCols = ({colsData}) => {
  const {basicLocation, detailedLocation, openingHours  } = colsData
  
  return (
    <Container className={styles.mainCont} fluid>
      <Row className={`justify-content-center ${styles.row}`}>
        <Col md={4} lg={true} className={`${styles.col}`}>
          <MdLocationOn className={styles.icon} />
          <p>{basicLocation}</p>
        </Col>
        <Col md={4} lg={true} className={`${styles.col}`}>
          <BiCurrentLocation className={styles.icon} />
          <p>{detailedLocation}</p>
        </Col>
        <Col md={4}  lg={true} className={`${styles.col}`}>
          <AiOutlineClockCircle className={styles.icon} />
          <p>{openingHours}</p>
        </Col>
      </Row>
    </Container>
  )
}

AboutCols.defaultProps = {
  colsData: {
    basicLocation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    detailedLocation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    openingHours:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
}

export default AboutCols
