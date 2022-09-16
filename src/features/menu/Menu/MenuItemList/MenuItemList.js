import React from "react"
import { Col } from "react-bootstrap"
import MenuItemCard from "../MenuItemCard/MenuItemCard"

const MenuItemList = ({ menu, qrmenu }) => {
  return (
    <>
      {menu.map(item => (
        <li key={item.strapi_id}>
          <Col>
            <MenuItemCard item={item} qrmenu={qrmenu}/>
          </Col>
        </li>
      ))}
    </>
  )
}

MenuItemList.defaultProps = {
  menu: [],
  qrmenu: false
}

export default MenuItemList
