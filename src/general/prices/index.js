import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const GeneralPrices = ({ prices }) => {
	const [countSelected, setCountSelected] = useState(prices[0].count)
	const types = prices.find(({ count }) => count === countSelected).types

	return (
		<>
			<div className="tabs">
				{prices.map(({ count }) => (
					<button
						className="tabs__item button-reset"
						key={count}
						onClick={() => setCountSelected(count)}
						onKeyDown={() => setCountSelected(count)}
					>
						{count} человека
					</button>
				))}
			</div>

			<div className="priceTable">
				<div className="priceTable__line">
					{types.map((type) => (
						<div className="priceTable__line-item" key={type.id}>
							{type.name}
						</div>
					))}
				</div>

				<div className="priceTable__line">
					{types.map((type) => (
						<div className="priceTable__line-item" key={type.id}>
							{type.value}
						</div>
					))}
				</div>
			</div>
		</>
	)
}

GeneralPrices.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default GeneralPrices
