import React, { useContext } from 'react'

import '../column.css'

import ColumnBlocksAdvant from '../blocks/advant'
import ColumnBlocksCommon from '../blocks/common'
import ColumnBlocksDirection from '../blocks/direction'

import { TourFilterInfo } from '../../../templates/filters/programs/provider'
import { ExcursionFilterInfo } from '../../../templates/filters/excursions/provider'

const ColumnFilters = () => {
	const tourFilterInfoContext = useContext(TourFilterInfo)
	const excursionFilterInfoContext = useContext(ExcursionFilterInfo)

	const context = {
		tourFilterInfoContext,
		excursionFilterInfoContext,
	}

	return (
		<div className="right-column-container">
			<div className="right-column">
				<ColumnBlocksDirection {...context} /> <ColumnBlocksCommon {...context} />
				<ColumnBlocksAdvant />
			</div>
		</div>
	)
}

export default ColumnFilters
