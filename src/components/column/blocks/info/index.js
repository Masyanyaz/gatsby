import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import GeneralPricesMinMax from '../../../../general/prices/minMax'

const ColumnBlocksInfo = ({ hours, days, transports, towns, prices, priceType, groupCount }) => {
	return (
		<div className="excursionInfo__block">
			{hours && (
				<div className="excursionInfo__block-element">
					<span>Durée: </span>
					<div>
						<span>{hours}</span> часов
					</div>
				</div>
			)}
			{days && (
				<div className="excursionInfo__block-element">
					<span>Jours: </span>
					<div>
						{days.length ? (
							<div>
								<span>{days.length}</span> дней
							</div>
						) : (
							'слыш, добавь дни'
						)}
					</div>
				</div>
			)}
			{
				<div className="excursionInfo__block-element infotypes">
					{priceType.name}, {groupCount ? groupCount : `нетю`}
				</div>
			}
			{towns && (
				<div className="excursionInfo__block-element">
					<span>Villes: </span>
					<div>
						{towns.length ? (
							<div>
								<span>{towns.length}</span> ville
							</div>
						) : (
							'слыш, добавь города'
						)}
					</div>
				</div>
			)}
			{transports && (
				<div className="excursionInfo__block-element">
					<span>{transports.length > 1 ? `Types de transport: ` : `Type de transport: `}</span>
					<div>
						{transports.map(({ id, name, image }) => (
							<img key={id} src={image.publicURL} alt="" title={name} />
						))}
					</div>
				</div>
			)}
			<div className="excursionInfo__block-element">
				<span>Prix:</span>
				<div>
					<GeneralPricesMinMax prices={prices} />
				</div>
			</div>
		</div>
	)
}

ColumnBlocksInfo.defaultProps = {
	hours: null,
	days: null,
	transports: null,
	towns: null,
}

ColumnBlocksInfo.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default ColumnBlocksInfo
