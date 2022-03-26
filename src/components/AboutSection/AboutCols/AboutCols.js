import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { MdLocationOn } from "react-icons/md"
import { BiCurrentLocation } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"
import * as styles from "../AboutCols/aboutCols.module.css"

const AboutCols = () => {
  return (
    <Container className={styles.mainCont} fluid>
      <Row className={`justify-content-center ${styles.row}`}>
        <Col md={4} lg={true} className={`${styles.col}`}>
          <MdLocationOn className={styles.icon} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
        <Col md={4} lg={true} className={`${styles.col}`}>
          <BiCurrentLocation className={styles.icon} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
        <Col md={4}  lg={true} className={`${styles.col}`}>
          <AiOutlineClockCircle className={styles.icon} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutCols
