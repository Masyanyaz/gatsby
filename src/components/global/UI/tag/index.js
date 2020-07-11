import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

import Link from '../../link'

const GlobalUITag = ({ to, text, className, ...other }) => {
	return (
		<Link to={to} className={`${styles.tag} ${className}`} {...other}>
			{text}
		</Link>
	)
}

GlobalUITag.defaultProps = {
	className: '',
}

GlobalUITag.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default GlobalUITag
