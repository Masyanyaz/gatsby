import React from 'react'

import './index.css'

import ColumnBlocksAdvant from '../blocks/advant'
import DirectionsBlockFilter from '../../programs/filters/directions'
import ColumnBlocksCommon from '../blocks/common'

const ColumnEndPages = () => {
	return (
		<div className="right-column">
			<DirectionsBlockFilter />
			<ColumnBlocksCommon />
			<ColumnBlocksAdvant />
		</div>
	)
}

export default ColumnEndPages
