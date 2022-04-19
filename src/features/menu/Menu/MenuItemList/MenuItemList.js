import React from "react"
import { Col } from "react-bootstrap"
import MenuItemCard from "../MenuItemCard/MenuItemCard"

const MenuItemList = ({ menu }) => {
  return (
    <>
      {menu.map(item => (
        <li key={item.strapi_id}>
          <Col>
            <MenuItemCard item={item} />
          </Col>
        </li>
      ))}
    </>
  )
}

MenuItemList.defaultProps = {
  menu: [],
}
export default MenuItemList
