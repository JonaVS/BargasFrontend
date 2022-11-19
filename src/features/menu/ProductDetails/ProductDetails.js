import React, { useEffect, useState } from "react"
import {toastDispatcher, ToastType} from '../../../helpers/toastDispatcher'
import {errorMessageBuilder, ErrorContext} from '../../../helpers/errorMessageBuilder'
import agent from "../../../API/agent"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import ProductFormPlaceHolder from "../../../shared/components/Form/ProductForm/Placeholder/ProductFormPlaceHolder/ProductFormPlaceHolder"
import ProductPriceAvailability from "./ProductPriceAvailability/ProductPriceAvailability"
import ProductForm from "../../../shared/components/Form/ProductForm/ProductForm"
import ProductDescription from "./ProductDescription/ProductDescription"
import FixedComponent from "../../../shared/components/FixedComponent/FixedComponent"
import LinkBtn from "../../../shared/components/LinkBtn/LinkBtn"
import { AiOutlineArrowLeft } from "react-icons/ai"
import * as styles from "../ProductDetails/productDetails.module.css"

/*This component uses 2 versions of product data:
  -First one is generated by Gatsby to build the static product page,
  so clients are able to see some pre-built data like hero image, 
  product ingredients and description.

  -Second one comes from the Backend via API call. The API call is needed 
  because clients need to know if the product itself and selectable options are actually available. 
  This info is passed via prop to the product form.

  For this use case this is a nice feature, because if the backend goes down the clients are able 
  to see some product info instead of nothing.
*/

const ProductDetails = ({ productData }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAvailable, setIsAvailable] = useState(false)
  const [apiProductData, setApiProductData] = useState({})

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const result = await agent.product.details(productData.strapi_id)
        setApiProductData(productObjectBuilder(productData, result.data.attributes))
        setIsAvailable(result.data.attributes.available)
      } catch (error) {
        toastDispatcher(
          ToastType.ERROR,
          errorMessageBuilder(ErrorContext.PRODUCT_DETAILS, error)
        )
      }
      setIsLoading(false)
    }
    getProductDetails()
  }, [productData.strapi_id, productData])

  const productObjectBuilder = (productData, apiProductData) => {
    return {
      ...apiProductData,
      strapi_id: productData.strapi_id,
      thumbnail: productData.image.formats.thumbnail.url,
      qualityImg: productData.image.localFile.childImageSharp.gatsbyImageData,
    }
  }

  return (
    <Container>
      <Row>
        <Col lg={6} className={styles.orderingPanel}>
          <h1>Ordenar</h1>
          {isLoading ? (
              <ProductFormPlaceHolder />
          ) : (
            <>
              <ProductPriceAvailability
                price={productData.price}
                available={isAvailable}
              />
              {isAvailable && <ProductForm productData={apiProductData}/>}
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
