import React from "react"
import { graphql } from "gatsby"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import ProductDetails from "../features/menu/ProductDetails/ProductDetails"
import Divider from "../shared/components/Divider/Divider"

const Product = ({ data }) => {
  const productData = data.strapiProduct
  return (
    <>
      <HeroContainer
        image={productData.image.localFile.childImageSharp.gatsbyImageData}
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
    strapiProduct(slug: { eq: $slug }) {
      image {
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
      name
      price
      discount
      ingredients
      description
      available
      mains {
        id
        name
      }
      sides {
        id
        name
      }
      sauces {
        id
        name
      }
      sizes {
        id
        name
        alias
        price
      }
      strapi_id
    }
  }
`
