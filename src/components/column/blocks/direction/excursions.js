import React from 'react'

import './index.css'

import Link from '../../../global/link'

const ColumnBlocksDirectionExcursions = ({ direction, directionPath }) => {
	return (
		<div className="direction">
			<p>aussi à {direction.name}</p>
			{direction.tours.length > 0 && (
				<div className="direction__element">
					<div className="direction__element-icon" />
					<p>
						<Link to={`/${directionPath || 'catalogue/filters/tours/all/all/all/all'}`}>Tours</Link>
					</p>
				</div>
			)}
			{/*<div className="direction__element">*/}
			{/*	<div className="direction__element-icon" />*/}
			{/*	<p>Billets de théâtre</p>*/}
			{/*</div>*/}
		</div>
	)
}

export default ColumnBlocksDirectionExcursions
