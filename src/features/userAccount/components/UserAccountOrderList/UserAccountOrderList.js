import React from "react"
import { Row } from "react-bootstrap"
import UserAccountOrderCard from "../UserAccountOrderCard/UserAccountOrderCard"
import NoContentMessage from "../../../../shared/components/NoContentMessage/NoContentMessage"

const UserAccountOrderList = ({ userOrders }) => {
  return userOrders.length ? (
    <Row as="ul" xs={1} md={1} lg={2} className="mt-4 list-unstyled">
      {userOrders.map(order => (
        <UserAccountOrderCard key={order.id} order={order} />
      ))}
    </Row>
  ) : (
    <NoContentMessage message='No hay pedidos para mostrar' />
  )

}

UserAccountOrderList.defaultProps = {
  userOrders: [],
}

export default UserAccountOrderList
