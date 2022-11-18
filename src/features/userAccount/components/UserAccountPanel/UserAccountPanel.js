import React from "react"
import UserAccountInfoModule from "../UserAccountInfoModule/UserAccountInfoModule"
import LazyLoad from "react-lazy-load"
import UserAccountOrdersModule from "../UserAccountOrdersModule/UserAccountOrdersModule"

const UserAccountPanel = () => {
  return (
    <>
      <UserAccountInfoModule />
      <LazyLoad>
        <UserAccountOrdersModule />
      </LazyLoad>
    </>
  )
}

export default UserAccountPanel
