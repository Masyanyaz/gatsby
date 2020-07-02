import React from "react"

import "./direction.css"

const DirectionBlock = ({ directionName }) => {

  return (
    <div className="direction">
      <p>aussi à { directionName }</p>
      <div className="direction__element">
        <div className="direction__element-icon"></div>
        <p>Excursions</p>
      </div>
      <div className="direction__element">
        <div className="direction__element-icon"></div>
        <p>Billets de théâtre</p>
      </div>
    </div>
  )
}

export default DirectionBlock
