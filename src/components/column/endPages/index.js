import React from 'react'

import '../column.css'
import './index.css'

import FormsPopupButton from '../../forms/popup/button'
import ColumnBlocksReview from '../blocks/review'
import Link from '../../global/link'

const ColumnEndPages = ({ columnBlocksInfo }) => {
	return (
		<div className="right-column-container">
			<div className="right-column sticky">
				<div className="excursionInfo__block">{columnBlocksInfo()}</div>
				<Link to="#priceTable">К цене</Link>
				<FormsPopupButton className="right-column-button">Слыш, купи</FormsPopupButton>
				<ColumnBlocksReview />
			</div>
		</div>
	)
}

export default ColumnEndPages
