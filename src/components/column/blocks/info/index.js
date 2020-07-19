import React, { useContext } from 'react'

import './index.css'

import ColumnBlocksInfoExcursions from './excursions'
import ColumnBlocksInfoPrograms from './programs'

import { TourInfo } from '../../../../templates/endPages/programs'
import { ExcursionInfo } from '../../../../templates/endPages/excursions'

const ColumnBlocksInfo = () => {
	const tourInfoContext = useContext(TourInfo)
	const excursionInfoContext = useContext(ExcursionInfo)

	return (
		<div className="excursionInfo__block">
			{tourInfoContext && <ColumnBlocksInfoPrograms {...tourInfoContext} />}
			{excursionInfoContext && <ColumnBlocksInfoExcursions {...excursionInfoContext} />}
		</div>
	)
}

export default ColumnBlocksInfo
