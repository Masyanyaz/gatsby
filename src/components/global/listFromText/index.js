import React from 'react'
import PropTypes from 'prop-types'

const GlobalListFromText = ({ text }) => {
	const list = text.split('\n')
	return (
		<ul>
			{list.map((list, i) => (
				<li key={i}>{list}</li>
			))}
		</ul>
	)
}

GlobalListFromText.propTypes = {
	text: PropTypes.string.isRequired,
}

export default GlobalListFromText
