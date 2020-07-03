import React from "react"

import "./popup.css"

const PopupForm = ({popupClick}) => {
  return (
    <div className="popup">
      <div className="popup__form">
        <div className="popup__form-cross" onClick={popupClick}>&times;</div>
        <form action="">
          <label> Votre nom, prénom:
            <input type="text"/>
          </label>
          <label> Votre email
            <input type="text"/>
          </label>
          <label> Laissez votre numéro de téléphone pour recevoir notre appel
            <input type="text"/>
          </label>
          <label> Quels services vous intéressent?
            <textarea/>
          </label>
        </form>
      </div>
    </div>
  )
}

export default PopupForm