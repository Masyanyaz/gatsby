import React from 'react'

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
