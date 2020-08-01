import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { openPopupForm } from '../../../store/form/actions'

import GlobalUIButton from '../../global/UI/button'

const FormsPopupButton = ({ children, className, ...other }) => {
	const dispatch = useDispatch()

	const openForm = () => dispatch(openPopupForm())

	return (
		<GlobalUIButton className={className} onClick={openForm} {...other}>
			{children}
		</GlobalUIButton>
	)
}

FormsPopupButton.defaultProps = {
	className: '',
}

FormsPopupButton.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default FormsPopupButton
