import React from 'react'

import PreviewTours from '../../../components/preview/tours'
import { useAllTours } from '../../../fragments/programs'

const Combine = ({ directionPath, backPath, categoryPath, guidePath }) => {
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
			{filteredTours.length && directionPath ? (
				<div>
					<h2>Другие туры</h2>
					<div className="preview__grid">
						{filteredTours.map(({ node }) => (
							<PreviewTours key={node.id} node={node} backPath={backPath} />
						))}
					</div>
				</div>
			) : null}
		</>
	)
}

export default Combine
