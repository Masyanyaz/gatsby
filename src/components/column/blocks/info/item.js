import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const ColumnBlocksInfoItem = ({ children, label, items }) => {
	return (
		<>
			{items && (
				<div className="excursionInfo__block-element">
					<span>{label}: </span>
					<div>{children(items)}</div>
				</div>
			)}
		</>
	)
}

ColumnBlocksInfoItem.propTypes = {
	children: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	items: PropTypes.object.isRequired,
}

export default ColumnBlocksInfoItem
