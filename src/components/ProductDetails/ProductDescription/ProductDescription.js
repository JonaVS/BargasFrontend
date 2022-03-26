import React from "react"
import { Accordion, Card, useAccordionButton } from "react-bootstrap"
import { IoIosArrowDown } from "react-icons/io"
import * as styles from "../ProductDescription/productDescription.module.css"

const ProductDescription = () => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    )

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        className={styles.toggleText}
      >
        {children}
        <IoIosArrowDown size={25} className="align-middle" />
      </button>
    )
  }

  return (
    <Accordion alwaysOpen defaultActiveKey={["0", "1"]}>
      <Card className={styles.card}>
        <Card.Header className="p-0">
          <CustomToggle eventKey="0"><h1>Descripción</h1></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className={styles.cardBody}>
            <p className={styles.descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className={styles.card}>
        <Card.Header className="p-0">
          <CustomToggle eventKey="1"><h1>Ingredientes</h1></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className={styles.cardBody}>
            <p className={styles.descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default ProductDescription
