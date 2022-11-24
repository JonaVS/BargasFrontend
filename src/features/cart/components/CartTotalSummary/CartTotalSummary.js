import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import agent from "../../../../API/agent"
import UnavailableService from "../../../../shared/components/UnavailableService/UnavailableService"
import { Spinner } from "react-bootstrap"
import Button, { ButtonTypeAnimation } from "../../../../shared/components/Button/Button"
import * as styles from "./cartTotalSummary.module.css"

const CartTotalSummary = ({ focusErrors }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [serviceData, setServiceData] = useState({
    deliveryCost: 0,
    onlineOrdering: false,
  })
  const { cartTotal } = useContext(CartContext)
  const { deliveryCost, onlineOrdering } = serviceData

  useEffect(() => {
    const getOrderingServiceStatus = async () => {
      try {
        const result = await agent.generalInfo.websiteInfo()
        const { deliveryCost, onlineOrdering } = result.data.attributes
        setServiceData({ deliveryCost, onlineOrdering })
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    getOrderingServiceStatus()
  }, [])

  if (!onlineOrdering && !isLoading) {
    return (
      <UnavailableService
        visible={true}
        message="Los pedidos en linea no están disponibles en este momento."
      />
    )
  }

  return (
    <div className={styles.totalWrapper}>
      {isLoading ? (
        <Spinner animation="border" role="status" variant="warning" />
      ) : (
        <>
          <div className={styles.dataWrapper}>
            <p>Subtotal: ₡ {Intl.NumberFormat("CRC").format(cartTotal)}</p>
            <p>Envio: ₡ {Intl.NumberFormat("CRC").format(deliveryCost)}</p>
            <div className={styles.basicDivider} />
            <p>
              TOTAL: ₡ {Intl.NumberFormat("CRC").format(cartTotal + deliveryCost)}
            </p>
          </div>
          <Button
            type="submit"
            whileHover={ButtonTypeAnimation.MainHover}
            className={styles.orderBtn}
            onClick={focusErrors}
          >
            ORDENAR
          </Button>
        </>
      )}
    </div>
  )
}

CartTotalSummary.defaultProps = {
  focusErrors: () => {},
}

export default CartTotalSummary
