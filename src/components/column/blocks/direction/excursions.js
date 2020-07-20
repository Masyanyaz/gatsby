import React from 'react'

import './index.css'

import Link from '../../../global/link'

const ColumnBlocksDirectionExcursions = ({ direction, directionPath }) => {
	return (
		<>
			<p>{directionPath ? `aussi à ${direction.name}` : 'Все направления'}</p>
			{direction.tours.length > 0 && (
				<div className="direction__element">
					<div className="direction__element-icon" />
					<p>
						<Link
							to={`/${directionPath ? directionPath : 'catalogue/filters/tours/all/all/all/all'}`}
						>
							Tours
						</Link>
					</p>
				</div>
			)}
			<div className="direction__element">
				<div className="direction__element-icon" />
				<p>Billets de théâtre</p>
			</div>
		</>
	)
}

export default ColumnBlocksDirectionExcursions
