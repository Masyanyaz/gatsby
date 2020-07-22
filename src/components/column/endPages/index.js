import React from 'react'

import '../column.css'
import './index.css'

import FormsPopupButton from '../../forms/popup/button'
import ColumnBlocksReview from '../blocks/review'
import ColumnBlocksInfo from '../blocks/info'

const ColumnEndPages = () => {
	return (
		<div className="right-column-container">
			<div className={`right-column sticky`}>
				<ColumnBlocksInfo />
				<a href="#priceTable">К цене</a>
				<FormsPopupButton text="Слыш, купи" className="right-column-button" />
				<ColumnBlocksReview />
			</div>
		</div>
	)
}

export default ColumnEndPages
