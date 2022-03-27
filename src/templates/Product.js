import React from "react"
import { graphql } from "gatsby"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import ProductDetails from "../features/menu/ProductDetails/ProductDetails"
import Divider from "../shared/components/Divider/Divider"

const Product = ({ data }) => {
  const productData = data.strapiProductos
  return (
    <>
      <HeroContainer
        image={productData.imagen.localFile.childImageSharp.gatsbyImageData}
      >
      </HeroContainer>
      <Divider />
      <ProductDetails productData={productData} />
    </>
  )
}

export default Product

export const query = graphql`
  query productData($slug: String) {
    strapiProductos(slug: { eq: $slug }) {
      imagen {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 50)
          }
        }
        formats {
          thumbnail {
            url
          }
        }
      }
      nombre
      precio
      ingredientes
      descripcion
      disponible
      ing_principales {
        id
        nombre
      }
      acompanamientos {
        id
        nombre
      }
      strapiId
    }
  }
`
