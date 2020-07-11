import React from 'react'

import '../column.css'

import ColumnBlocksAdvant from '../blocks/advant'
import ColumnBlocksDirection from '../blocks/direction'
import ColumnBlocksCommon from '../blocks/common'

const ColumnFilters = () => {
	return (
		<div className="right-column-container">
			<div className="right-column">
				<ColumnBlocksDirection /> <ColumnBlocksCommon /> <ColumnBlocksAdvant />
			</div>
		</div>
	)
}

export default ColumnFilters
