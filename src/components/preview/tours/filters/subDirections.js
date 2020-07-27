import React from 'react'
import PropTypes from 'prop-types'

import PreviewTours from '../index'
import PreviewChunkOutput from '../../chunkOutput'

import { useAllTours } from '../../../../fragments/programs'

const PreviewToursSubDirections = ({ directionPath, backPath, categoryPath, guidePath }) => {
	const tours = useAllTours()

	const filteredTours = tours.filter(({ node: { directions, categories, guide } }) => {
		const [, ...secondary] = directions.map(({ path }) => path)
		const pathCategories = categories.map(({ path }) => path)

		const categoryIncludes = categoryPath ? pathCategories.includes(categoryPath) : true
		const guideIncludes = guidePath ? guide.path === guidePath : true

		return secondary.includes(directionPath) && categoryIncludes && guideIncludes
	})

	return (
		<>
			{filteredTours.length > 0 && directionPath && (
				<section>
					<h2>Другие туры</h2>
					<PreviewChunkOutput array={filteredTours} backPath={backPath} Component={PreviewTours} />
				</section>
			)}
		</>
	)
}

PreviewToursSubDirections.propTypes = {
	directionPath: PropTypes.string,
	categoryPath: PropTypes.string,
	guidePath: PropTypes.string,
	backPath: PropTypes.string.isRequired,
}

export default PreviewToursSubDirections
