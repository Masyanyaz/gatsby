import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'

import GlobalUIButton from '../../../components/global/UI/button'

const GeneralPrices = ({ prices }) => {
	const [countSelected, setCountSelected] = useState(prices[0].count)
	const types = prices.find(({ count }) => count === countSelected).types

	return (
		<>
			<div className="tabs">
				{prices.map(({ count }) => (
					<GlobalUIButton
						key={count}
						text={`${count} человека`}
						className="tabs__item button-reset"
						onClick={() => setCountSelected(count)}
						onKeyDown={() => setCountSelected(count)}
					/>
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
