import React from "react"
import { useDispatch, useSelector } from "react-redux"

import "./popup.css"

import { closePopupForm } from "../../../store/form/actions"

const PopupForm = () => {

  const dispatch = useDispatch()
  const openForm = useSelector(state => state.form.openForm)

  const closeForm = () => dispatch(closePopupForm())

  return (
    <>
      {
        openForm &&
        <div>
          <div className="popup" onClick={ closeForm } />
          <div className="popup__form">
            <div className="popup__form-cross" onClick={ closeForm }>&times;</div>
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
      }
    </>
  )
}

export default PopupForm
