import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import GeneralFilterDirections from './directions'
import GeneralFilterCategories from './categories'
import GeneralFilterGuides from './guides'

const GeneralFilter = ({
	directionPath,
	categoryPath,
	guidePath,
	directions,
	categories,
	guides,
}) => {
	const directionPathArray = directions.map(({ node: { path } }) => path)
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
			<GeneralFilterGuides guides={guides} {...context} />
		</div>
	)
}

GeneralFilter.defaultProps = {
	directionPath: 'all',
	categoryPath: 'all',
	guidePath: 'all',
}

GeneralFilter.propTypes = {
	directionPath: PropTypes.string,
	categoryPath: PropTypes.string,
	guidePath: PropTypes.string,
	directions: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
	guides: PropTypes.array.isRequired,
}

export default GeneralFilter
