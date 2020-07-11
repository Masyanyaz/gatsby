import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { name, email, phone, comment } from '../schema'

import styles from './index.module.css'

import { closePopupForm } from '../../../store/form/actions'

import FormsBlocksInput from '../blocks/input'

const initialValues = {
	name: '',
	email: '',
	phone: '',
	comment: '',
}

const validationSchema = Yup.object().shape({
	name,
	email,
	phone,
	comment,
})

const FormsPopup = () => {
	const dispatch = useDispatch()
	const openForm = useSelector((state) => state.form.openForm)

	const closeForm = () => dispatch(closePopupForm())

	const onSubmit = (values) => {
		console.log(values)
	}

	return (
		<>
			{openForm && (
				<div>
					<div className={styles.popup} onClick={closeForm} />
					<div className={styles.popup__form}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							<Form>
								<FormsBlocksInput name="name" label="Votre nom, prénom:" />
								<FormsBlocksInput name="email" label="Votre email" />
								<FormsBlocksInput
									name="phone"
									label="Laissez votre numéro de téléphone pour recevoir notre appel"
								/>
								<FormsBlocksInput
									name="comment"
									label="Quels services vous intéressent?"
									as="textarea"
								/>
								<button type="submit" className={styles.popup__formSubmit}>
									Submit
								</button>
							</Form>
						</Formik>
					</div>
				</div>
			)}
		</>
	)
}

export default FormsPopup
