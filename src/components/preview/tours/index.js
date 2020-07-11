import React, { useState } from 'react'
import './index.css'

import PreviewImage from './image'
import PreviewTypes from './types'
import Link from '../../global/link'

const TownsList = ({ towns }) => {
	return (
		<div className="town-list">
			<ul>
				{towns.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>
		</div>
	)
}

const PreviewTours = ({ node }) => {
	const [hover, setHover] = useState(false)

	const openTowns = () => {
		setHover((hover) => !hover)
	}
	console.log(1)
	return (
		<div className="preview__block">
			<PreviewImage
				directionPath={node.direction.path}
				path={node.path}
				category={node.category}
				prices={node.prices}
			/>

			<div className="preview__block-center">
				<div className="preview__block-name">{node.name}</div>
				<div className="preview__block-center-row">
					<div className="preview__block-center-row-element">{node.days.length} дней</div>
					<div
						role="button"
						tabIndex="0"
						className="preview__block-center-row-element towns"
						onMouseEnter={openTowns}
						onMouseLeave={openTowns}
					>
						{node.towns.length} города
						{hover && <TownsList towns={node.towns} />}
					</div>
					<div className="preview__block-center-row-element">
						<PreviewTypes types={node.types} />
					</div>
				</div>
			</div>

			<Link
				to={`/catalogue/programs/${node.direction.path}/tours/${node.category.path}/${node.path}/`}
				className="preview__block-button"
			>
				ПОДРОБНЕЕ
			</Link>
		</div>
	)
}

export default PreviewTours
