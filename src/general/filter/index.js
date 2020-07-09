import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './index.css'

import GeneralFilterDirections from './directions'
import GeneralFilterCategories from './categories'
import GeneralFilterSeasons from './seasons'

const GeneralFilter = ({
	directionPath,
	categories,
	seasons,
	categoryPath,
	seasonPath,
	typePath,
}) => {
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
			<GeneralFilterDirections directions={directions} {...context} />
			<GeneralFilterCategories categories={categories} {...context} />
			<GeneralFilterSeasons seasons={seasons} {...context} />
		</div>
	)
}

export default GeneralFilter
