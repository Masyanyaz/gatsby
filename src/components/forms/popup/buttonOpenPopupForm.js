import React from "react"
import { useDispatch } from "react-redux"

import { openPopupForm } from "../../../store/form/actions"

const ButtonOpenPopupForm = ({ text, className, ...other }) => {

  const dispatch = useDispatch()

  const openForm = () => dispatch(openPopupForm())

  return (
    <button
      onClick={ openForm }
      className={ `${ className } button-reset` }
      { ...other }
    >
      { text }
    </button>
  )
}

export default ButtonOpenPopupForm
