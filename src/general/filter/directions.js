import React from 'react'
import PropTypes from 'prop-types'

import GlobalUISelect from '../../components/global/UI/select'
import { useAllDirections } from '../../fragments/directions'

const GeneralFilterDirections = ({ categoryPath, guidePath, directionPath }) => {
	const directions = useAllDirections()

	const items = [
		{
			id: 'all',
			text: 'Все',
			value: `/catalogue/filters/tours/all/${categoryPath}/${guidePath}/all`,
			active: directionPath === 'all',
		},
	]
	directions.forEach(({ node: { id, name, path, tours } }) => {
		if (tours.length) {
			const linkDirection =
				categoryPath === 'all' && guidePath === 'all'
					? `/${path}`
					: `/catalogue/filters/tours/${path}/${categoryPath}/${guidePath}/all`

			items.push({
				id,
				text: name,
				value: linkDirection,
				active: directionPath === path,
			})
		}
	})

	return <GlobalUISelect array={items} link />
}

GeneralFilterDirections.defaultProps = {
	categoryPath: 'all',
	guidePath: 'all',
}

GeneralFilterDirections.propTypes = {
	categoryPath: PropTypes.string,
	guidePath: PropTypes.string,
}

export default GeneralFilterDirections
