import React from 'react'
import PropTypes from 'prop-types'

import GeneralPricesMinMax from '../../../../general/prices/minMax'

const ColumnBlocksInfoPrograms = ({ days, towns, prices }) => {
	return (
		<>
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
			{towns && (
				<div className="excursionInfo__block-element">
					<span>Towns: </span>
					<div>
						{towns.length ? (
							<div>
								<span>{towns.length}</span> город
							</div>
						) : (
							'слыш, добавь города'
						)}
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

ColumnBlocksInfoPrograms.defaulProps = {
	days: null,
	towns: null,
}

ColumnBlocksInfoPrograms.propTypes = {
	prices: PropTypes.array.isRequired,
}

export default ColumnBlocksInfoPrograms
