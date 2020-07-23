import React, { useContext } from 'react'

import '../column.css'
import './index.css'

import FormsPopupButton from '../../forms/popup/button'
import ColumnBlocksReview from '../blocks/review'
import ColumnBlocksInfo from '../blocks/info'
import Link from '../../global/link'

import { TourInfo } from '../../../templates/endPages/programs/provider'
import { ExcursionInfo } from '../../../templates/endPages/excursions/provider'

const ColumnEndPages = () => {
	const tourInfoContext = useContext(TourInfo)
	const excursionInfoContext = useContext(ExcursionInfo)

	return (
		<div className="right-column-container">
			<div className="right-column sticky">
				<ColumnBlocksInfo
					tourInfoContext={tourInfoContext}
					excursionInfoContext={excursionInfoContext}
				/>
				{(tourInfoContext?.prices.length > 0 || excursionInfoContext?.prices?.length > 0) && (
					<Link to="#priceTable">К цене</Link>
				)}
				<FormsPopupButton text="Слыш, купи" className="right-column-button" />
				<ColumnBlocksReview />
			</div>
		</div>
	)
}

export default ColumnEndPages
