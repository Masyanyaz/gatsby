import * as Yup from "yup"

export const name = Yup.string().required("Required")

export const email = Yup.string().email("Invalid email address").required("Required")

export const phone = Yup.string()

export const comment = Yup.string().required("Required")

