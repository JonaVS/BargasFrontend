import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import agent from "../../../../API/agent"
import UnavailableService from "../../../../shared/components/UnavailableService/UnavailableService"
import { Spinner } from "react-bootstrap"
import Button, { ButtonTypeAnimation } from "../../../../shared/components/Button/Button"
import * as styles from "./cartTotalSummary.module.css"
import { motion } from "framer-motion"

//START--Framer motion variants--START
const summary = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 1
    },
  },
}
//END--Framer motion variants--END

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

  return (
    <motion.div
      variants={summary}
      initial="hidden"
      animate="show"
      className={styles.totalWrapper}
    >
      {isLoading ? (
        <Spinner animation="border" role="status" variant="warning" />
      ) : (
        <>
          {!onlineOrdering ? (
            <UnavailableService
              visible={true}
              message="Los pedidos en linea no están disponibles en este momento."
            />
          ) : (
            <>
              <div className={styles.dataWrapper}>
                <p>Subtotal: ₡ {Intl.NumberFormat("CRC").format(cartTotal)}</p>
                <p>Envio: ₡ {Intl.NumberFormat("CRC").format(deliveryCost)}</p>
                <div className={styles.basicDivider} />
                <p>
                  TOTAL: ₡
                  {Intl.NumberFormat("CRC").format(cartTotal + deliveryCost)}
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
        </>
      )}
    </motion.div>
  )
}

CartTotalSummary.defaultProps = {
  focusErrors: () => {},
}

export default CartTotalSummary
