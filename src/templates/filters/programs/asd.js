import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import PreviewTours from '../../../components/preview/tours'

const Combine = ({ towns, directionPath, backPath, categoryPath }) => {
	const tours = useStaticQuery(graphql`
		{
			allStrapiTours {
				edges {
					node {
						...toursMain
						...toursPrices
						...toursDays
						...toursDirections
						...toursCategories
						...toursTowns
						preview_text
					}
				}
			}
		}
	`)
	const arrayTowns = towns.map((town) => town.id)

	const filterTours = tours.allStrapiTours.edges.filter((tour) => {
		const tourTowns = tour.node.towns.map((town) => town.id)
		return (
			arrayTowns.every((item) => tourTowns.includes(item)) &&
			tour.node.direction.path !== directionPath &&
			tour.node.category.path === categoryPath
		)
	})

	return (
		<>
			{filterTours.length && directionPath ? (
				<div>
					<h2>Другие туры</h2>
					<div className="preview__grid">
						{filterTours.map(({ node }) => (
							<PreviewTours key={node.id} node={node} backPath={backPath} />
						))}
					</div>
				</div>
			) : null}
		</>
	)
}

export default Combine
