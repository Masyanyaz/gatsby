import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Message = ({ children, className }) => (
	<span className={`${styles.message} ${className}`}>{children}</span>
)

export const FormsBlocksMessageError = ({ children }) => (
	<Message className={styles.error}>{children}</Message>
)

export const FormsBlocksMessageSuccess = ({ children }) => (
	<Message className={styles.success}>{children}</Message>
)

Message.defaultProps = {
	className: '',
}

Message.propTypes = FormsBlocksMessageError.propTypes = FormsBlocksMessageSuccess.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}
