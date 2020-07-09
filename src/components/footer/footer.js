import React from 'react'

const Footer = () => (
	<footer
		style={{
			margin: `0 auto`,
			textAlign: `center`,
		}}
	>
		<span>© {new Date().getFullYear()}</span>
	</footer>
)

export default Footer
