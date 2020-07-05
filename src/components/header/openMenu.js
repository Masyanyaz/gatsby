import React from "react"

const OpenMenu = ({ items }) => {

  return (
    <div className="hover__menu">
      {
        items.map(({ node }) => (
          <div className="hover__menu-item">
            <div className="hover__menu-item-picture" />
            <div className="hover__menu-item-name" key={ node.id }>
              { node.name }
            </div>
          </div>
        ))
      }
    </div>
  )
}


export default OpenMenu

