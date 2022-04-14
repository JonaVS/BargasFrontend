import React, { useEffect, useState } from "react"
import agent from "../../../API/agent"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import ProductFormPlaceholder from "../../../shared/components/Form/ProductForm/Placeholder/ProductFormPlaceHolder/ProductFormPlaceHolder"
import ProductTagsPlaceHolder from "../../../shared/components/Form/ProductForm/Placeholder/ProductFormPlaceHolder/ProductTagsPlaceHolder"
import ProductPriceAvailability from "./ProductPriceAvailability/ProductPriceAvailability"
import ProductForm from "../../../shared/components/Form/ProductForm/ProductForm"
import ProductDescription from "./ProductDescription/ProductDescription"
import FixedComponent from "../../../shared/components/FixedComponent/FixedComponent"
import LinkBtn from "../../../shared/components/LinkBtn/LinkBtn"
import { AiOutlineArrowLeft } from "react-icons/ai"
import * as styles from "../ProductDetails/productDetails.module.css"

const ProductDetails = ({ productData }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const getProductDetails = async () => {
      try {
        const result = await agent.product.details(productData.strapi_id)
        setIsLoading(false)
        setIsAvailable(result.data.attributes.available)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getProductDetails()
  }, [productData.strapi_id])

  return (
    <Container>
      <Row>
        <Col lg={6} className={styles.orderingPanel}>
          <h1>Ordenar</h1>
          {isLoading ? (
            <>
              <ProductTagsPlaceHolder />
              <ProductFormPlaceholder />
            </>
          ) : (
            <>
              <ProductPriceAvailability
                price={productData.price}
                available={isAvailable}
              />
              {isAvailable && <ProductForm productData={productData}/>}
            </>
          )}
        </Col>
        <Col
          xs={{ order: "first" }}
          lg={{ span: 6, order: "last" }}
        >
          <ProductDescription />
        </Col>
      </Row>
      <FixedComponent className={styles.fixedComponent}>
        <LinkBtn link='/menu' className={styles.menuLink}>
          <AiOutlineArrowLeft className={styles.icon} />
          Menú
        </LinkBtn>
        <h1 className='d-flex align-items-center'>
          {isLoading && (
              <Spinner
                animation="border"
                variant="warning"
                className="h6 align-middle me-2 mt-2 p-0"
                style={{width:'1.5rem', height: '1.5rem'}}
              />
          )}
          {productData.name}
        </h1>
      </FixedComponent>
    </Container>
  )
}

ProductDetails.defaultProps = {
  productData: {},
}

export default ProductDetails
