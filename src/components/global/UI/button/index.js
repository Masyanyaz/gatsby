import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const GlobalUIButton = forwardRef(({ children, className, ...other }, ref) => {
	return (
		<button ref={ref} className={`${styles.buttonReset} ${className}`} {...other}>
			{children}
		</button>
	)
})

GlobalUIButton.defaultProps = {
	className: '',
}

GlobalUIButton.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default GlobalUIButton
