import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { name, email, phone, comment } from "../schema"

import "./popup.css"

import { closePopupForm } from "../../../store/form/actions"

import FormItem from "./formItem/formItem"

const initialValues = {
  name: "",
  email: "",
  phone: "",
  comment: "",
}

const validationSchema = Yup.object().shape({
  name,
  email,
  phone,
  comment,
})

const PopupForm = () => {

  const dispatch = useDispatch()
  const openForm = useSelector(state => state.form.openForm)

  const closeForm = () => dispatch(closePopupForm())

  const onSubmit = (values, actions) => {
    console.log(actions)
  }

  return (
    <>
      {
        openForm &&
        <div>
          <div className="popup" onClick={ closeForm } />
          <div className="popup__form">
            <Formik
              initialValues={ initialValues }
              validationSchema={ validationSchema }
              onSubmit={ onSubmit }
            >
              <Form>
                <FormItem name="name" label="Votre nom, prénom:" />
                <FormItem name="email" label="Votre email" />
                <FormItem name="phone" label="Laissez votre numéro de téléphone pour recevoir notre appel" />
                <FormItem name="comment" label="Quels services vous intéressent?" as="textarea" />
                <button type="submit" className="popup__form-submit">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      }
    </>
  )
}

export default PopupForm
