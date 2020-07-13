import React, { useState } from 'react'
import './index.css'

const PricesExcursion = ({ prices }) => {
	const counts = [...new Set(prices.map((price) => price.count))]
	const [countSelected, setCountSelected] = useState(counts[0])

	const handleSelect = (e) => {
		setCountSelected(+e.target.value)
	}

	const filteredPrices = prices.filter((price) => price.count === countSelected)
	return (
		<>
			<div>
				<select onChange={handleSelect} defaultValue={countSelected}>
					{counts.map((count) => (
						<option key={count} value={count}>
							{count} человека
						</option>
					))}
				</select>
			</div>

			<div className="exPriceTable">
				<div>Prix par personne:</div>
				{filteredPrices.map((price) => (
					<div key={price.id}>{price.value} euro</div>
				))}
			</div>
		</>
	)
}

export default PricesExcursion
