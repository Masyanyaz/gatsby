import React from 'react'
import Img from 'gatsby-image'

import { useAllIcons } from '../../../fragments/icons'
import { useAllPriceTypes } from '../../../fragments/priceTypes'
import { useAllSeasons } from '../../../fragments/seasons'

const findIconInTour = (array, id) => {
	return array.find(({ node }) => node.strapiId === id)
}

const PreviewToursIcons = ({ priceTypeId, seasonId, iconId }) => {
	//TODO проверить image.publicURL у season и priceType (в PreviewToursIcons вместо id передавать весь массив season и priceType, у некоторых туров был null)

	const season = findIconInTour(useAllSeasons(), seasonId)
	const priceType = findIconInTour(useAllPriceTypes(), priceTypeId)
	const category = findIconInTour(useAllIcons(), iconId)

	return (
		<div className="preview__block-icons">
			{[season, priceType, category].map(({ node }) => (
				<Img
					key={node.id}
					className="preview__block-icons-img"
					fixed={node.image.childImageSharp.fixed}
					alt=""
					title={node.name}
				/>
			))}
		</div>
	)
}

export default PreviewToursIcons
