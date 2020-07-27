import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

import GlobalUIButton from '../button'

const GlobalUIHover = ({ children, text, className, style, ...other }) => {
	const [hover, setHover] = useState(false)

	const showHover = () => {
		setHover((hover) => !hover)
	}

	return (
		<GlobalUIButton className={className} onMouseEnter={showHover} onMouseLeave={showHover}>
			<span>{text}</span>
			{hover && (
				<div style={style} className={styles.hover}>
					{children}
				</div>
			)}
		</GlobalUIButton>
	)
}

GlobalUIHover.defaultProps = {
	className: '',
	text: '',
	style: {},
}

GlobalUIHover.propTypes = {
	children: PropTypes.node.isRequired,
	text: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
}

export default GlobalUIHover
