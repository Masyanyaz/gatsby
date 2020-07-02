import React from "react"

import Link from "../global/link"

const OpenMenu = ({ items }) => {

  return (
    <div style={ { position: "absolute", top: "100%", left: "20px", backgroundColor: "#fff", padding: "10px 20px" } }>
      <ul>
        {
          items.map(({ node }) => (
            <li key={ node.id } >
              { node.name }
            </li>
          ))
        }
      </ul>
    </div>

  )
}


export default OpenMenu

