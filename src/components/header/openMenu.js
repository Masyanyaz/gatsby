import React from "react"
import Link from "../global/link"

const OpenMenu = ({ items }) => {
  console.log(items)
  return (
    <div className="hover__menu">
      {
        items.map(({ node }) => (
          <Link to={`/catalogue/filters/tours/${node.path}/all/all/all`} className="hover__menu-item">
            <div className="hover__menu-item-picture" />
            <div className="hover__menu-item-name" key={ node.id }>
              { node.name }
            </div>
          </Link>
        ))
      }
    </div>
  )
}


export default OpenMenu

