import React, { useState, useEffect, useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { decodeGatewayResult } from "../../../helpers/orderingResultDecoder"
import LoadingOverlay from "../../../shared/components/LoadingOverlay/LoadingOverlay"
import OrderingResultMsg from "../components/OrderingResultMsg/OrderingResultMsg"
import * as styles from "./orderingResult.module.css"

const OrderingResult = ({ resultType }) => {
  const { setCart } = useContext(CartContext)
  const [isValidating, setIsValidating] = useState(true)
  const [messageType, setMessageType] = useState("success")

  useEffect(() => {
    const paymentResult = decodeGatewayResult(resultType)
    if (resultType === "basic" || paymentResult.success ) {
      setCart([])
    } else {
      setMessageType('error')
    }
    setIsValidating(false)
  }, [resultType])

  return (
    <div className={styles.resultMsg}>
      {isValidating ? (
        <LoadingOverlay />
      ) : (
        <OrderingResultMsg type={messageType} />
      )}
    </div>
  )
}

export default OrderingResult