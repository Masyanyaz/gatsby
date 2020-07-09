import React from 'react'

import './index.css'

export const FormsBlocksMessageError = ({ children }) => (
	<span className="error message">{children}</span>
)

export const FormsBlocksMessageSuccess = ({ children }) => (
	<span className="success message">{children}</span>
)
