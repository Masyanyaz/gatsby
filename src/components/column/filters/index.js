import React from 'react'

import './index.css'

import ColumnBlocksAdvant from '../blocks/advant'
import ColumnBlocksDirection from '../blocks/direction'
import ColumnBlocksCommon from '../blocks/common'

const ColumnFilters = () => {
	return (
		<div className="right-column">
			<ColumnBlocksDirection />
			<ColumnBlocksCommon />
			<ColumnBlocksAdvant />
		</div>
	)
}

export default ColumnFilters
