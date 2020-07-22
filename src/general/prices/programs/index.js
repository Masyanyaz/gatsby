import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const GeneralPrices = ({ prices }) => {
	// Формируем шапку из типов
	const types = prices.map(({ id, name }) => (
		<div key={id} className="priceTable__line-item">
			{name}
		</div>
	))

	// Собираем уникальные количества человек и сортируем их по возрастанию (если вдруг в админке перепутаем местами)
	const count = prices
		.reduce((res, { count }) => {
			count.map(({ count }) => !res.includes(count) && res.push(count))
			return res
		}, [])
		.sort((a, b) => a - b)

	return (
		<>
			{prices.length ? (
				<div className="priceTable">
					<div className="priceTable__line priceTable__head">
						<div className="priceTable__line-item" />
						{types}
					</div>
					{count.map((item, i) => (
						<div key={i} className="priceTable__line">
							<div className="priceTable__line-item">{item}</div>
							{prices.map(({ id, count }) => (
								<div key={id} className="priceTable__line-item">
									{count.find(({ count }) => count === item).value}
								</div>
							))}
						</div>
					))}
				</div>
			) : (
				<h3>По запросу</h3>
			)}
		</>
	)
}

GeneralPrices.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default GeneralPrices
