import React, {useState} from "react"

import "./common.css"

const CommonBlock = (props) => {
  const [open, setOpen] = useState(false)
  const openContent = () =>{
    setOpen(true)
  }
  console.log(open)
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
      {!open
        ?
        <div className="common__more" onClick={openContent}>
          <p>encore</p>
        </div>
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