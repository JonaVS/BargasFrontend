import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../context/UserContext"
import agent from "../../../../API/agent"
import { toastDispatcher, ToastType } from "../../../../helpers/toastDispatcher"
import UserAccountModule from "../UserAccountModule/UserAccountModule"
import LoadingOverlay from "../../../../shared/components/LoadingOverlay/LoadingOverlay"
import UserAccountOrderList from "../UserAccountOrderList/UserAccountOrderList"

const UserAccountOrdersModule = () => {
  const { user } = useContext(UserContext)
  const [userOrdersData, setUserOrdersData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const userId = user.id ? user.id : null

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const ordersData = await agent.user.getUserOrders(userId, { withCredentials: true })
        setUserOrdersData(ordersData.orders)
      } catch (error) {
        toastDispatcher(
          ToastType.ERROR,
          'Se ha producido un error al intentar cargar tus pedidos'
        )
      }
      setIsLoading(false)
    }

    getUserOrders()
  }, [])

  return (
    <UserAccountModule>
      <h2>Mis pedidos</h2>
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <UserAccountOrderList userOrders={userOrdersData} />
      )}
    </UserAccountModule>
  )
}

export default UserAccountOrdersModule
