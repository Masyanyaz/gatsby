import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './index.css'

import GeneralFilterDirections from './directions'
import GeneralFilterCategories from './categories'
import GeneralFilterSeasons from './seasons'

const GeneralFilter = ({
	directionPath,
	directions,
	categories,
	guides,
	categoryPath,
	guidePath,
}) => {
	const directionPathArray = directions.map((direction) => direction.node.path)
	const directionIncludes = directionPathArray.includes(directionPath)

	const context = {
		directionPath,
		categoryPath,
		guidePath,
		directionIncludes,
	}

	return (
		<div className="filters">
			<GeneralFilterDirections directions={directions} {...context} />
			<GeneralFilterCategories categories={categories} {...context} />
			<GeneralFilterSeasons guides={guides} {...context} />
		</div>
	)
}

export default GeneralFilter
