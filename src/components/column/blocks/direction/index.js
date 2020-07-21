import React from 'react'

import './index.css'

import ColumnBlocksDirectionPrograms from './programs'
import ColumnBlocksDirectionExcursions from './excursions'

const ColumnBlocksDirection = ({ tourFilterInfoContext, excursionFilterInfoContext }) => {
	return (
		<>
			{tourFilterInfoContext && <ColumnBlocksDirectionPrograms {...tourFilterInfoContext} />}
			{excursionFilterInfoContext && (
				<ColumnBlocksDirectionExcursions {...excursionFilterInfoContext} />
			)}
		</>
	)
}

export default ColumnBlocksDirection
