import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { openPopupForm } from '../../../store/form/actions'

import GlobalUIButton from '../../global/UI/button'

const FormsPopupButton = ({ text, className, ...other }) => {
	const dispatch = useDispatch()

	const openForm = () => dispatch(openPopupForm())

	return (
		<GlobalUIButton className={className} onClick={openForm} {...other}>
			{text}
		</GlobalUIButton>
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
