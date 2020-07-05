import React, { useState } from "react"

import "./common.css"

const CommonBlock = (props) => {
  const [ open, setOpen ] = useState(false)
  const openContent = () => {
    setOpen(true)
  }

  return (
    <div className="common">
      <p>autres services</p>
      <div className="common__element">
        <div className="common__element-icon"></div>
        <p>Planification de voyage</p>
      </div>
      <div className="common__element">
        <div className="common__element-icon"></div>
        <p>Invitations et visa</p>
      </div>
      <div className="common__element">
        <div className="common__element-icon"></div>
        <p>Billets de train</p>
      </div>
      {
        !open ?
          <button className="common__more button-reset" onClick={ openContent }>
            encore
          </button>
          :
          <div className="common__element">
            <div className="common__element-icon"></div>
            <p>Transferts</p>
          </div>
      }
    </div>
  )
}

export default CommonBlock
