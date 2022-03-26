import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Categories from "../Categories/Categories"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import LinkBtn from "../LinkBtn/LinkBtn"
import burrito from "../../images/burrito.jpg"
import MenuItemCard from "./MenuItemCard/MenuItemCard"
import * as styles from "../Menu/menu.module.css"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiProductos {
        nodes {
          strapiId
          nombre
          precio
          descripcion
          ingredientes
          disponible
          slug
          categoria {
            nombre
          }
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500)
              }
            }
          }
        }
      }
      allStrapiCategorias {
        nodes {
          nombre
          strapiId
        }
      }
    }
  `)

  const productData = {
    categories: [{id: 999, nombre: 'Todos'}, ...data.allStrapiCategorias.nodes],
    products: data.allStrapiProductos.nodes 
  }

  const [categorie, setCategorie] = useState('Todos')
  const [filteredMenu, setFilteredMenu] = useState(productData.products)

  const handleCategorie = (e) => {
    if (e.target.value === 'Todos') {
      setFilteredMenu(productData.products) 
    }else {
      setFilteredMenu(productData.products
        .filter(x => x.categoria.nombre === e.target.value)) 
    }
    setCategorie(e.target.value)
  }

  return (
    <Container>
      <Categories
        handleCategorie={handleCategorie}
        categories={productData.categories}
        currentCategorie={categorie}
      />
      <Row xs={1} sm={1} md={2} lg={2} xl={2} xxl={3} className="g-4 mt-5">
        {filteredMenu.map(item => (
          <Col key={item.strapiId}>
            <MenuItemCard item={item} />
          </Col>
        ))}

        {Array.from({ length: 5 }).map((_, idx) => (
          <Col key={idx}>
            <Card className={styles.card}>
              <Card.Img variant="top" src={burrito} />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  El burrito loco
                </Card.Title>
                <LinkBtn>Ordenar</LinkBtn>
                <p className={styles.priceTag}>
                  <span>₡</span> 5.000
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Menu
