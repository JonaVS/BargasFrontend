import React from "react"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { Row } from "react-bootstrap"
import MenuItemCard from "../MenuItemCard/MenuItemCard"

const MenuItemList = ({ menu, qrmenu }) => {
  return (
    <Row
      as='ul'
      xs={1}
      sm={1}
      md={2}
      lg={2}
      xl={2}
      xxl={3}
      className="g-4 mt-5 list-unstyled"
    >
      <LayoutGroup>
        <AnimatePresence>
          {menu.map(item => (
            <MenuItemCard key={item.strapi_id} item={item} qrmenu={qrmenu} />
          ))}
        </AnimatePresence>
      </LayoutGroup>
    </Row>
  )
}

MenuItemList.defaultProps = {
  menu: [],
  qrmenu: false,
}

export default MenuItemList
