import React, { useContext } from 'react'

import './index.css'

import ColumnBlocksDirectionPrograms from './programs'
import ColumnBlocksDirectionExcursions from './excursions'

import { TourFilterInfo } from '../../../../templates/filters/programs'
import { ExcursionFilterInfo } from '../../../../templates/filters/excursions'

const ColumnBlocksDirection = () => {
	const tourFilterInfoContext = useContext(TourFilterInfo)
	const excursionFilterInfoContext = useContext(ExcursionFilterInfo)

	return (
		<div className="direction">
			{tourFilterInfoContext && <ColumnBlocksDirectionPrograms {...tourFilterInfoContext} />}
			{excursionFilterInfoContext && (
				<ColumnBlocksDirectionExcursions {...excursionFilterInfoContext} />
			)}
		</div>
	)
}

export default ColumnBlocksDirection
