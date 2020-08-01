import React from 'react'

import '../column.css'

import ColumnBlocksAdvant from '../blocks/advant'
import ColumnBlocksCommon from '../blocks/common'
import ColumnBlocksDirection from '../blocks/direction'

const ColumnFilters = ({ columnContext }) => {
	return (
		<div className="right-column-container">
			<div className="right-column">
				<ColumnBlocksDirection {...columnContext} />
				<ColumnBlocksCommon {...columnContext} />
				<ColumnBlocksAdvant />
			</div>
		</div>
	)
}

export default ColumnFilters
