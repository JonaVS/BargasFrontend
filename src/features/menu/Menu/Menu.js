import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Categories from "../Categories/Categories"
import Row from "react-bootstrap/Row"
import MenuItemList from "./MenuItemList/MenuItemList"
import NoContentMessage from "../../../shared/components/NoContentMessage/NoContentMessage"
import *as styles from './menu.module.css'

const Menu = ({ qrmenu }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiProduct {
        nodes {
          strapi_id
          name
          price
          description
          ingredients
          available
          slug
          categories {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500)
              }
            }
          }
        }
      }
      allStrapiCategorie {
        nodes {
          name
          strapi_id
        }
      }
    }
  `)

  const productData = {
    categories: [{strapi_id: 999, name: 'Todos'}, ...data.allStrapiCategorie.nodes],
    products: data.allStrapiProduct.nodes 
  }
  const [categorie, setCategorie] = useState('Todos')
  const [filteredMenu, setFilteredMenu] = useState(productData.products)

  const handleCategorie = (e) => {
    if (e.target.value === 'Todos') {
      setFilteredMenu(productData.products) 
    }else {
      setFilteredMenu(productData.products
        .filter(x => x.categories.find(x => x.name === e.target.value))) 
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
      {filteredMenu.length === 0 ? (
        <NoContentMessage messageClass={styles.noContentMsg} />
      ) : (
        <MenuItemList menu={filteredMenu} qrmenu={qrmenu} />
      )}
    </Container>
  )
}

Menu.defaultProps = {
  qrmenu: false,
}

export default Menu
