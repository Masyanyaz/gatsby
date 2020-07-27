import React from 'react'
import PropTypes from 'prop-types'

import GlobalUISelect from '../../components/global/UI/select'

const GeneralFilterDirections = ({
	directions,
	categoryPath,
	guidePath,
	directionIncludes,
	directionPath,
}) => {
	const items = [
		{
			id: 'all',
			text: 'Все',
			value: `/catalogue/filters/tours/all/${categoryPath}/${guidePath}/all`,
			active: directionPath === 'all',
		},
	]
	directions.forEach(({ node: { id, name, path } }) => {
		const linkDirection =
			(!directionIncludes && categoryPath === 'all' && guidePath === 'all') ||
			(directionIncludes && categoryPath === 'all' && guidePath === 'all')
				? `/${path}`
				: `/catalogue/filters/tours/${path}/${categoryPath}/${guidePath}/all`

		items.push({
			id,
			text: name,
			value: linkDirection,
			active: directionPath === path,
		})
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
	directions: PropTypes.array.isRequired,
	directionIncludes: PropTypes.bool.isRequired,
}

export default GeneralFilterDirections
