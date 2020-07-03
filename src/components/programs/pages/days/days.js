import React from "react"
import "./days.css"

const Days = ({ days }) => {
  return (
    <div>
      {
        days.map((day, i) => (
          <div key={ day.id } className="programm__days">
            <div className="programm__days-left">
              <div className="programm__days-left-count">
                <span>День { i + 1 }</span> из { days.length }
              </div>
              <div className="programm__days-left-name">
                { day.name }
              </div>
              <div className="programm__days-left-description">
                { day.text }
              </div>
            </div>
            <div className="programm__days-right">
              <img src={ day.picture.publicURL } alt="" />
            </div>
          </div>
        ))
      }
    </div>
  )

}

export default Days
