import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import ColumnBlocksDirectionPrograms from './programs'
import ColumnBlocksDirectionExcursions from './excursions'

const ColumnBlocksDirection = ({ service, ...other }) => {
	return (
		<>
			{service === 'TOURS' && <ColumnBlocksDirectionPrograms {...other} />}
			{service === 'EXCURSIONS' && <ColumnBlocksDirectionExcursions {...other} />}
		</>
	)
}

ColumnBlocksDirection.propTypes = {
	service: PropTypes.oneOf(['TOURS', 'EXCURSIONS']).isRequired,
}

export default ColumnBlocksDirection
