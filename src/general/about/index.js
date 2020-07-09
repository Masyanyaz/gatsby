import React from 'react'

import './index.css'

import GeneralPricesMinMax from '../prices/minMax'

const GeneralAbout = ({ days, towns, groupCount, priceType, prices }) => {
	return (
		<div className="aboutTour">
			<div className="aboutTour__item">
				<div className="aboutTour__item-name">Длительность:</div>
				<div className="aboutTour__item-info">
					{days.length ? days.length + ' дней' : 'слыш, добавь дни'}
				</div>
			</div>
			<div className="aboutTour__item">
				<div className="aboutTour__item-name">Количество городов:</div>
				<div className="aboutTour__item-info">
					{towns.length ? towns.length + ' города' : 'слыш, добавь города'}
				</div>
			</div>
			<div className="aboutTour__item">
				<div className="aboutTour__item-name">Тип тура:</div>
				<div className="aboutTour__item-info">
					{groupCount ? groupCount : 'слыш, добавь 1й тип тура'},{' '}
					{priceType ? priceType : 'слыш, добавь 2й тип тура'}
				</div>
			</div>
			<div className="aboutTour__item">
				<div className="aboutTour__item-name">Цена:</div>
				<div className="aboutTour__item-info">
					<GeneralPricesMinMax prices={prices} />
				</div>
			</div>
		</div>
	)
}

export default GeneralAbout
