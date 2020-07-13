import React from 'react'
import PropTypes from 'prop-types'

import '../column.css'
import './index.css'

import FormsPopupButton from '../../forms/popup/button'
import ColumnBlocksReview from '../blocks/review'

const ColumnEndPages = ({ componentInfo }) => {
	return (
		<div className="right-column-container">
			<div className={`right-column sticky`}>
				{componentInfo()}
				<FormsPopupButton text="Слыш, купи" className="right-column-button" />
				<ColumnBlocksReview />
			</div>
		</div>
	)
}

ColumnEndPages.propTypes = {
	componentInfo: PropTypes.func.isRequired,
}

export default ColumnEndPages
