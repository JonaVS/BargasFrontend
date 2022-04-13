import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Card } from "react-bootstrap"
import LinkBtn from "../../../../shared/components/LinkBtn/LinkBtn"
import * as styles from "./menuItemCard.module.css"

const MenuItemCard = ({ item }) => {
  if (!item) return <></>

  return (
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
          <LinkBtn link={`/menu/${item.slug}`}>
            Ordenar
          </LinkBtn>
          <p className={styles.priceTag}>
            ₡ {new Intl.NumberFormat("CRC").format(item.price)}
          </p>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default MenuItemCard
