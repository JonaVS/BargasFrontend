import React from "react"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { MdLocationOn } from "react-icons/md"
import { BiCurrentLocation } from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai"
import * as styles from "./aboutCols.module.css"

//START--Framer motion variants--START
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 150 },
  show: { opacity: 1, y: 0, transition: {duration: 1} }
}
//END--Framer motion variants--END

const AboutCols = ({colsData}) => {
  const {basicLocation, detailedLocation, openingHours  } = colsData

  return (
    <Container className={styles.mainCont} fluid>
      <Row
        as={motion.div}
        className={`${styles.aboutInfoCont}`}
        variants={container}
        initial='hidden'
        whileInView="show"
        viewport={{ fallback: true, once: true }} 
      >
        <Col
          as={motion.div}
          md={4}
          lg={true}
          className={`${styles.col}`}
          variants={item}
        >
          <MdLocationOn className={styles.icon} />
          <p>{basicLocation}</p>
        </Col>
        <Col
          as={motion.div}
          md={4}
          lg={true}
          className={`${styles.col}`}
          variants={item}
        >
          <BiCurrentLocation className={styles.icon} />
          <p>{detailedLocation}</p>
        </Col>
        <Col
          as={motion.div}
          md={4}
          lg={true}
          className={`${styles.col}`}
          variants={item}
        >
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
