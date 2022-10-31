import React from "react"
import UserAccountInfoModule from "../UserAccountInfoModule/UserAccountInfoModule"
import UserAccountOrdersModule from "../UserAccountOrdersModule/UserAccountOrdersModule"

const UserAccountPanel = () => {
  return (
    <>
      <UserAccountInfoModule />
      <UserAccountOrdersModule />
    </>
  )
}

export default UserAccountPanel
