import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, Field } from 'formik'

import './index.css'

import { FormsBlocksMessageError } from '../message'

const FormsBlocksInput = ({ name, label, as }) => (
	<div className="popup__form-item">
		<label htmlFor={name}>{label}</label>
		<Field as={as} name={name} />
		<ErrorMessage name={name} component={FormsBlocksMessageError} />
	</div>
)

FormsBlocksInput.defaultProps = {
	as: '',
}

FormsBlocksInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	as: PropTypes.string,
}

export default FormsBlocksInput
