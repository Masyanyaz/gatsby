import React from 'react'
import './about.css'

import MinMaxPriceBlock from '../prices/minMaxPrice'

const AboutTour = ({ days, towns, groupCount, priceType, prices }) => {
	return (
		<div className="aboutTour">
			<div className="aboutTour__item">
				<span>Длительность</span>:{' '}
				{days.length ? days.length + ' дней' : 'слыш, добавь дни'}
			</div>
			<div className="aboutTour__item">
				<span>Количество городов</span>:{' '}
				{towns.length ? towns.length + ' города' : 'слыш, добавь города'}
			</div>
			<div className="aboutTour__item">
				<span>Тип тура</span>:{' '}
				{groupCount ? groupCount : 'слыш, добавь 1й тип тура'},{' '}
				{priceType ? priceType : 'слыш, добавь 2й тип тура'}
			</div>
			<div className="aboutTour__item">
				<span>Цена</span>: <MinMaxPriceBlock prices={prices} />
			</div>
		</div>
	)
}

export default AboutTour
