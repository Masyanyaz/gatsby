import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'

import PreviewImage from './image'
import Link from '../../global/link'
import PreviewToursIcons from './icons'
import GlobalUIHover from '../../global/UI/hover'

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
					<GlobalUIHover
						text={`${node.towns.length} городов`}
						className={'preview__block-center-row-element towns'}
					>
						<TownsList towns={node.towns} />
					</GlobalUIHover>
					<div className="preview__block-center-row-element">
						<PreviewToursIcons
							priceTypeId={node.priceType.id}
							seasonId={node.season.id}
							categoryId={node.categories[0].icon}
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
