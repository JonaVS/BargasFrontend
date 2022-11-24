import React, { useState } from "react"
import { Card, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import Button, { ButtonTypeAnimation } from "../../../../shared/components/Button/Button"
import LinkBtn from "../../../../shared/components/LinkBtn/LinkBtn"
import ProductDetailsModal from "../../ProductDetails/QrMenuProductDetails/ProductModalDetails"
import * as styles from "./menuItemCard.module.css"

//START--Framer motion variants--START
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3} },
  exit: { opacity: 0, transition: { duration: 0.4 } },
}
//END--Framer motion variants--END

const MenuItemCard = ({ item, qrmenu }) => {
  const [showModal, setShowModal] = useState(false)
  
  const handleShowDetailsModal = () => {
    setShowModal(!showModal)
  }

  if (!item) return null
  
  return (
    <Col
      key='framerMenuItem'             
      as={motion.li}
      variants={card}
      initial="hidden"
      whileInView="show"
      exit="exit"
      layout
      viewport={{ fallback: true, once: true, amount: 0.3 }}>
      <Card className={`${styles.card}`}>
        <GatsbyImage
          image={item.image.localFile.childImageSharp.gatsbyImageData}
          alt={item.name}
        />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{item.name}</Card.Title>
          <Card.Text as="div" className={styles.textWrapper}>
            <p className={styles.description}>{item.description}</p>
          </Card.Text>
          <Card.Footer className="p-0 mt-5">
            {qrmenu ? (
              <Button
                whileHover={ButtonTypeAnimation.MainHover}
                onClick={handleShowDetailsModal}
                className={styles.detailsBtn}
              >
                Detalles
              </Button>
            ) : (
              <LinkBtn link={`/menu/${item.slug}`}>Ordenar</LinkBtn>
            )}
            <p className={styles.priceTag}>
              ₡ {new Intl.NumberFormat("CRC").format(item.price)}
            </p>
          </Card.Footer>
        </Card.Body>
      </Card>
      <ProductDetailsModal show={showModal} close={handleShowDetailsModal} item={item}/>
    </Col>
  )
}

MenuItemCard.defaultProps = {
  qrmenu: false,
}

export default MenuItemCard
