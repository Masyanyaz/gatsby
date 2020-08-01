import React from 'react'
import Img from 'gatsby-image'

import ColumnBlocksInfoItem from './item'
import GeneralPricesMinMax from '../../../../general/prices/minMax'

export const Days = ({ days }) => {
	return (
		<ColumnBlocksInfoItem items={{ days }} label="Jours">
			{({ days }) => (
				<>
					<span>{days.length}</span> дней
				</>
			)}
		</ColumnBlocksInfoItem>
	)
}

export const Types = ({ priceType, groupCount }) => {
	return (
		<ColumnBlocksInfoItem items={{ priceType, groupCount }} label="Types">
			{({ priceType, groupCount }) => (
				<>
					{priceType.name}, {groupCount ?? `нетю`}
				</>
			)}
		</ColumnBlocksInfoItem>
	)
}

export const Towns = ({ towns }) => {
	return (
		<ColumnBlocksInfoItem items={{ towns }} label="Towns">
			{({ towns }) => (
				<>
					<span>{towns.length}</span> город
				</>
			)}
		</ColumnBlocksInfoItem>
	)
}

export const Price = ({ prices }) => {
	return (
		<ColumnBlocksInfoItem items={{ prices }} label="Price">
			{({ prices }) => <GeneralPricesMinMax prices={prices} />}
		</ColumnBlocksInfoItem>
	)
}

export const Hours = ({ hours }) => {
	return (
		<ColumnBlocksInfoItem items={{ hours }} label="Durée">
			{({ hours }) => (
				<>
					<span>{hours}</span> часов
				</>
			)}
		</ColumnBlocksInfoItem>
	)
}

export const Transports = ({ transports }) => {
	return (
		<ColumnBlocksInfoItem items={{ transports }} label="Durée">
			{({ transports }) => (
				<>
					{transports.map(({ id, name, image }) => (
						<Img
							key={id}
							className="icon"
							fixed={image.childImageSharp.fixed}
							alt=""
							title={name}
						/>
					))}
				</>
			)}
		</ColumnBlocksInfoItem>
	)
}
