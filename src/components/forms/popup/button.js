import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { openPopupForm } from '../../../store/form/actions'

const FormsPopupButton = ({ text, className, ...other }) => {
	const dispatch = useDispatch()

	const openForm = () => dispatch(openPopupForm())

	return (
		<button onClick={openForm} className={`${className} button-reset`} {...other}>
			{text}
		</button>
	)
}

FormsPopupButton.defaultProps = {
	className: '',
}

FormsPopupButton.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default FormsPopupButton
