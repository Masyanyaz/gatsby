import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './filters.css'

import DirectionsBlockFilter from './directions'
import CategoriesBlockFilter from './categories'
import SeasonsBlockFilter from './seasons'

const Filters = ({ directionPath, categories, seasons, categoryPath, seasonPath, typePath }) => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiDirections(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
				edges {
					node {
						id
						name
						path
					}
				}
			}
		}
	`)

	const directions = data.allStrapiDirections.edges

	const directionPathArray = directions.map((direction) => direction.node.path)
	const directionIncludes = directionPathArray.includes(directionPath)

	const context = {
		directionPath,
		categoryPath,
		seasonPath,
		typePath,
		directionIncludes,
	}

	return (
		<div className="filters">
			<DirectionsBlockFilter directions={directions} {...context} />
			<CategoriesBlockFilter categories={categories} {...context} />
			<SeasonsBlockFilter seasons={seasons} {...context} />
		</div>
	)
}

export default Filters
