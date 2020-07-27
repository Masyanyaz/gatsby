import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'
import GlobalUISelect from '../../../components/global/UI/select'

const PricesExcursion = ({ prices }) => {
	const [countSelected, setCountSelected] = useState(prices[0])

	const handleSelect = (id) => {
		const price = prices.find((price) => price.id.toString() === id.toString())
		setCountSelected(price)
	}

	const items = prices.map(({ count, value, id }, i) => ({
		id,
		text: count,
		value,
		active: i === 0,
	}))

	return (
		<>
			{prices.length ? (
				<>
					<div>
						<GlobalUISelect array={items} onChange={handleSelect} />
					</div>

					<div className="exPriceTable">
						<div>Prix par personne:</div>
						<div>{countSelected.value} euro</div>
					</div>
				</>
			) : (
				<h3>По запросу</h3>
			)}
		</>
	)
}

PricesExcursion.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default PricesExcursion
