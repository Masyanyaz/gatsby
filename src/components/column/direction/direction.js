import React from 'react'

import './direction.css'

import Link from '../../global/link'
import { useSelector } from 'react-redux'

const DirectionBlock = () => {
	const { direction, service } = useSelector((state) => state.url)

	return (
		<div className="direction">
			<p>aussi à {direction.name}</p>
			<div className="direction__element">
				<div className="direction__element-icon" />
				{service === 'tour' ? (
					<p>
						<Link to={`/catalogue/filters/excursion/${direction.path}/all`}>Excursions</Link>
					</p>
				) : (
					<p>
						<Link to={`/${direction.path}`}>Tours</Link>
					</p>
				)}
			</div>
			<div className="direction__element">
				<div className="direction__element-icon" />
				<p>Billets de théâtre</p>
			</div>
		</div>
	)
}

export default DirectionBlock
