import React from 'react'

import './index.css'

import Link from '../../../global/link'

const ColumnBlocksDirectionPrograms = ({ direction, directionPath }) => {
	return (
		<>
			<p>{directionPath ? `aussi à ${direction.name}` : 'Все направления'}</p>
			{direction.excursions.length > 0 && (
				<div className="direction__element">
					<div className="direction__element-icon" />
					<p>
						<Link to={`/catalogue/filters/excursion/${directionPath ? directionPath : 'all'}/all`}>
							Excursions
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

export default ColumnBlocksDirectionPrograms
