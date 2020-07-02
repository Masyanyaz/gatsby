import React from "react"

import "./popup.css"

const PopupForm = ({popupClick}) => {
  return (
    <div className="popup">
      <div className="cross" onClick={popupClick}>&times;</div>
      <form action="">
        <label> name
          <input type="text"/>
        </label>
      </form>
    </div>
  )
}

export default PopupForm