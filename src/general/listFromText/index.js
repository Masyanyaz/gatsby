import React from 'react'

const GeneralListFromText = ({ text }) => {
	const list = text.split('\n')
	return (
		<ul>
			{list.map((list, i) => (
				<li key={i}>{list}</li>
			))}
		</ul>
	)
}

export default GeneralListFromText
