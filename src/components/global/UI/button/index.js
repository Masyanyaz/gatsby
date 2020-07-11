import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const GlobalUIButton = ({ text, className, ...other }) => {
	return (
		<button className={`${styles.buttonReset} ${className}`} {...other}>
			{text}
		</button>
	)
}

GlobalUIButton.defaultProps = {
	className: '',
}

GlobalUIButton.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default GlobalUIButton
