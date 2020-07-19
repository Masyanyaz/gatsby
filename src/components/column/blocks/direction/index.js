import React, { useContext } from 'react'

import './index.css'

import ColumnBlocksDirectionPrograms from './programs'
import ColumnBlocksDirectionExcursions from './excursions'

import { TourFilterInfo } from '../../../../templates/filters/programs'
import { ExcursionFilterInfo } from '../../../../templates/filters/excursions'

const ColumnBlocksDirection = ({ direction, directionPath }) => {
	const tourFilterInfoContext = useContext(TourFilterInfo)
	const excursionFilterInfoContext = useContext(ExcursionFilterInfo)

	return (
		<div className="direction">
			<p>{directionPath ? `aussi à ${direction.name}` : 'Все направления'}</p>
			{tourFilterInfoContext && <ColumnBlocksDirectionPrograms {...tourFilterInfoContext} />}
			{excursionFilterInfoContext && (
				<ColumnBlocksDirectionExcursions {...excursionFilterInfoContext} />
			)}
			<div className="direction__element">
				<div className="direction__element-icon" />
				<p>Billets de théâtre</p>
			</div>
		</div>
	)
}

export default ColumnBlocksDirection
