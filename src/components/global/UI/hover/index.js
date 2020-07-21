import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GlobalUIHover = ({ children, text, className, ...other }) => {
	const [hover, setHover] = useState(false)

	const showHover = () => {
		setHover((hover) => !hover)
	}

	return (
		<div
			role="button"
			tabIndex="0"
			className={className}
			onMouseEnter={showHover}
			onMouseLeave={showHover}
		>
			{text}
			{hover && children}
		</div>
	)
}

GlobalUIHover.defaultProps = {
	className: '',
}

GlobalUIHover.propTypes = {
	children: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default GlobalUIHover
