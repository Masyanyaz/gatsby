import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, Field } from 'formik'

import './formItem.css'

import FormErrorMessage from '../../formErrorMessage/formErrorMessage'

const FormItem = ({ name, label, as }) => (
	<div className="popup__form-item">
		<label htmlFor={name}>{label}</label>
		<Field as={as} name={name} />
		<ErrorMessage name={name} component={FormErrorMessage} />
	</div>
)

FormItem.defaultProps = {
	as: '',
}

FormItem.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	as: PropTypes.string,
}

export default FormItem
