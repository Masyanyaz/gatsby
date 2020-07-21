import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'

import PreviewImage from './image'
import Link from '../../global/link'
import PreviewToursIcons from './icons'

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

const PreviewTours = ({ node, backPath }) => {
	const [hover, setHover] = useState(false)

	const openTowns = () => {
		setHover((hover) => !hover)
	}

	return (
		<div className="preview__block">
			<PreviewImage
				directionPath={node.directions[0].path}
				path={node.path}
				category={node.categories[0]}
				prices={node.prices}
				backPath={backPath}
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
						{node.towns.length} город
						{hover && <TownsList towns={node.towns} />}
					</div>
					<div className="preview__block-center-row-element">
						<PreviewToursIcons
							priceTypeId={node.priceType.id}
							seasonId={node.season.id}
							iconId={node.categories[0].icon}
						/>
					</div>
				</div>
			</div>

			<Link
				to={`/catalogue/programs/${node.directions[0].path}/tours/${node.categories[0].path}/${node.path}/`}
				className="preview__block-button"
				state={{ back: backPath }}
			>
				ПОДРОБНЕЕ
			</Link>
		</div>
	)
}

PreviewTours.propTypes = {
	node: PropTypes.object.isRequired,
	backPath: PropTypes.string.isRequired,
}

export default PreviewTours
