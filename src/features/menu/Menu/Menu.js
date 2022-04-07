import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Categories from "../Categories/Categories"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MenuItemCard from "./MenuItemCard/MenuItemCard"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiProducto {
        nodes {
          strapi_id
          nombre
          precio
          descripcion
          ingredientes
          disponible
          slug
          categorias {
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
      allStrapiCategoria {
        nodes {
          nombre
          strapi_id
        }
      }
    }
  `)

  const productData = {
    categories: [{strapi_id: 999, nombre: 'Todos'}, ...data.allStrapiCategoria.nodes],
    products: data.allStrapiProducto.nodes 
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
          <Col key={item.strapi_id}>
            <MenuItemCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Menu
