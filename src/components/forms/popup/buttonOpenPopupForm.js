import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { openPopupForm } from '../../../store/form/actions'

const ButtonOpenPopupForm = ({ text, className, ...other }) => {
	const dispatch = useDispatch()

	const openForm = () => dispatch(openPopupForm())

	return (
		<button
			onClick={openForm}
			className={`${className} button-reset`}
			{...other}
		>
			{text}
		</button>
	)
}

ButtonOpenPopupForm.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default ButtonOpenPopupForm
