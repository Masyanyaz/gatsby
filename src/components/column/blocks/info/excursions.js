import React from 'react'

import GeneralPricesMinMax from '../../../../general/prices/minMax'
import PropTypes from 'prop-types'

const ColumnBlocksInfoExcursions = ({ hours, transports, prices }) => {
	return (
		<>
			{hours && (
				<div className="excursionInfo__block-element">
					<span>Durée: </span>
					<div>
						<span>{hours}</span> часов
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
				<span>Цена:</span>
				<div>
					<GeneralPricesMinMax prices={prices} />
				</div>
			</div>
		</>
	)
}

ColumnBlocksInfoExcursions.defaulProps = {
	hours: null,
	transports: null,
}

ColumnBlocksInfoExcursions.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default ColumnBlocksInfoExcursions
