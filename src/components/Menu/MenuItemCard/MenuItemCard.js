import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Card } from "react-bootstrap"
import LinkBtn from "../../LinkBtn/LinkBtn"
import * as styles from "../MenuItemCard/menuItemCard.module.css"

const MenuItemCard = ({ item }) => {
  if (!item) return <></>

  return (
    <Card className={`${styles.card}`}>
      <GatsbyImage
        image={item.imagen.localFile.childImageSharp.gatsbyImageData}
        alt={item.nombre}
      />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{item.nombre}</Card.Title>
        <Card.Text as="div" className={styles.textWrapper}>
          <p className={styles.description}>{item.descripcion}</p>
        </Card.Text>
        <Card.Footer className="p-0 mt-5">
          <LinkBtn className={styles.linkBtn} link={`/menu/${item.slug}`}>
            Ordenar
          </LinkBtn>
          <p className={styles.priceTag}>
            ₡ {new Intl.NumberFormat("CRC").format(item.precio)}
          </p>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default MenuItemCard
