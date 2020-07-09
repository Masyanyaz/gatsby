import React from 'react'
import PropTypes from 'prop-types'

const MinMaxPriceBlock = ({ prices }) => {
	const pricesArray = prices.reduce((res, price) => {
		const prices = price.types.map((type) => type.value)
		return [...res, ...prices]
	}, [])

	return (
		<>
			{prices.length ? (
				<>
					a <span>${Math.min(...pricesArray)}</span> - de <span>${Math.max(...pricesArray)}</span>
				</>
			) : (
				`price`
			)}
		</>
	)
}

MinMaxPriceBlock.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default MinMaxPriceBlock
