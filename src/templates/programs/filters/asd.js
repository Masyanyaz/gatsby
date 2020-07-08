import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PreviewProgram from '../../../components/programs/preview/preview'

const Combi = ({ towns, directionPath, context }) => {
	const tours = useStaticQuery(graphql`
		{
			allStrapiTours {
				edges {
					node {
						id
						name
						path
						preview_text
						prices {
							types {
								value
							}
						}
						days {
							id
						}
						direction {
							path
						}
						types {
							id
							name
							path
							img {
								publicURL
							}
						}
						category {
							id
							name
							path
						}
						towns {
							id
							name
						}
					}
				}
			}
		}
	`)
	const arrayTowns = towns.map((town) => town.id) // [1, 2, 3]
	const filterTours = tours.allStrapiTours.edges.filter((tour) => {
		const tourTowns = tour.node.towns.map((town) => town.id) // [1, 2]
		return (
			arrayTowns.every((item) => tourTowns.includes(item)) &&
			tour.node.direction.path !== directionPath
		)
	})

	return (
		<>
			{filterTours.length ? (
				<div>
					<h2>Другие туры</h2>
					<div className="preview__grid">
						{filterTours.map(({ node }) => (
							<PreviewProgram key={node.id} node={node} directionPath={directionPath} />
						))}
					</div>
				</div>
			) : null}
		</>
	)
}

export default Combi
