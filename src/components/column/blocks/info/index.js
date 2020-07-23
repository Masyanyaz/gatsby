import React from 'react'

import './index.css'

import ColumnBlocksInfoExcursions from './excursions'
import ColumnBlocksInfoPrograms from './programs'

const ColumnBlocksInfo = ({ tourInfoContext, excursionInfoContext }) => {
	return (
		<div className="excursionInfo__block">
			{tourInfoContext && <ColumnBlocksInfoPrograms {...tourInfoContext} />}
			{excursionInfoContext && <ColumnBlocksInfoExcursions {...excursionInfoContext} />}
		</div>
	)
}

export default ColumnBlocksInfo
