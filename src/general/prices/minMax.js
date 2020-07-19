import React from 'react'
import PropTypes from 'prop-types'

const GeneralPricesMinMax = ({ prices }) => {
	return (
		<>
			{prices.length ? (
				<>
					a <span>${Math.min(...prices)}</span> - de <span>${Math.max(...prices)}</span>
				</>
			) : (
				`price`
			)}
		</>
	)
}

GeneralPricesMinMax.propTypes = {
	prices: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default GeneralPricesMinMax
