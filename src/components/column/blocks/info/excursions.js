import React from 'react'
import PropTypes from 'prop-types'

import { Hours, Transports, Price } from './items'

const ColumnBlocksInfoExcursions = ({ hours, transports, prices }) => {
	return (
		<>
			<Hours hours={hours} />
			<Transports transports={transports} />
			<Price prices={prices} />
		</>
	)
}

ColumnBlocksInfoExcursions.defaulProps = {
	hours: null,
	transports: null,
}

ColumnBlocksInfoExcursions.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default ColumnBlocksInfoExcursions
