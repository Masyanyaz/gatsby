import React, { useState } from 'react'
import PropTypes from 'prop-types'

import GlobalUIButton from '../button'

const GlobalUISpoiler = ({ children, text, className, ...other }) => {
	const [open, setOpen] = useState(false)

	const openContent = () => {
		setOpen(true)
	}

	return (
		<>
			{!open ? (
				<GlobalUIButton text={text} className={className} onClick={openContent} {...other} />
			) : (
				<>{children}</>
			)}
		</>
	)
}

GlobalUISpoiler.defaultProps = {
	className: '',
}

GlobalUISpoiler.propTypes = {
	children: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default GlobalUISpoiler
