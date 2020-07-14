import React, { useRef } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { name, email, phone, comment } from '../schema'

import styles from './index.module.css'

import { closePopupForm } from '../../../store/form/actions'

import FormsBlocksInput from '../blocks/input'
import useOnClickOutside from '../../../hooks/onClickOutside'
import useLockScroll from '../../../hooks/lockBodyScroll'

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

const Popup = () => {
	const dispatch = useDispatch()
	const closeForm = () => dispatch(closePopupForm())
	const ref = useRef()

	useLockScroll(true)
	useOnClickOutside(ref, closeForm)

	const onSubmit = (values) => {
		console.log(values)
	}

	return (
		<div className={styles.popup}>
			<div className={styles.popup__form} ref={ref}>
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
	)
}

const FormsPopup = () => {
	const openForm = useSelector((state) => state.form.openForm)

	return <>{openForm && <Popup />}</>
}

export default FormsPopup
