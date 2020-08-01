import React from 'react'
import PropTypes from 'prop-types'

import { Days, Types, Towns, Price } from './items'

const ColumnBlocksInfoPrograms = ({ days, towns, prices, priceType, groupCount }) => {
	return (
		<>
			<Days days={days} />
			<Types groupCount={groupCount} priceType={priceType} />
			<Towns towns={towns} />
			<Price prices={prices} />
		</>
	)
}

ColumnBlocksInfoPrograms.defaulProps = {
	days: null,
	towns: null,
}

ColumnBlocksInfoPrograms.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default ColumnBlocksInfoPrograms
