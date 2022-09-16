import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Card } from "react-bootstrap"
import LinkBtn from "../../../../shared/components/LinkBtn/LinkBtn"
import ProductDetailsModal from "../../ProductDetails/QrMenuProductDetails/ProductModalDetails"
import * as styles from "./menuItemCard.module.css"

const MenuItemCard = ({ item, qrmenu }) => {
  const [showModal, setShowModal] = useState(false)
  
  const handleShowDetailsModal = () => {
    setShowModal(!showModal)
  }

  if (!item) return null
  
  return (
    <>
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
              <button onClick={handleShowDetailsModal} className={styles.detailsBtn}>Detalles</button>
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
    </>
  )
}

MenuItemCard.defaultProps = {
  qrmenu: false,
}

export default MenuItemCard
