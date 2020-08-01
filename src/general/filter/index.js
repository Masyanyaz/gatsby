import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import GeneralFilterDirections from './directions'
import GeneralFilterCategories from './categories'
import GeneralFilterGuides from './guides'

const GeneralFilter = (props) => {
	return (
		<div className="filters">
			<GeneralFilterDirections {...props} />
			<GeneralFilterCategories {...props} />
			<GeneralFilterGuides {...props} />
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
}

export default GeneralFilter
