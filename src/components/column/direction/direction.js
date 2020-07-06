import React from "react"

import "./direction.css"

import Link from "../../global/link"
import { useSelector } from "react-redux"

const DirectionBlock = ({ directionName }) => {
  const direction = useSelector(state => state.url.direction)
  const service = useSelector(state => state.url.service)

  return (
    <div className="direction">
      <p>aussi à { directionName }</p>
      <div className="direction__element">
        <div className="direction__element-icon"></div>
        {
          service === 'tour' ?
            <p>
              <Link to={`/catalogue/filters/excursion/${direction}/all`}>Excursions</Link>
            </p>
            :
            <p>
              <Link to={`/catalogue/filters/tours/${direction}/all/all/all`}>Tours</Link>
            </p>
        }

      </div>
      <div className="direction__element">
        <div className="direction__element-icon"></div>
        <p>Billets de théâtre</p>
      </div>
    </div>
  )
}

export default DirectionBlock
