import React from 'react'
import PropTypes from 'prop-types'

import GlobalUISelect from '../../components/global/UI/select'

const GeneralFilterGuides = ({
	directionPath,
	guides,
	categoryPath,
	directionIncludes,
	guidePath,
}) => {
	const linkAllGuides =
		categoryPath === 'all' && directionIncludes
			? `/${directionPath}`
			: `/catalogue/filters/tours/${directionPath}/${categoryPath}/all/all`

	const items = [
		{
			id: 'all',
			text: 'Все',
			value: linkAllGuides,
			active: guidePath === 'all',
		},
	]
	guides.forEach(({ node: { id, name, path } }) => {
		items.push({
			id,
			text: name,
			value: `/catalogue/filters/tours/${directionPath}/${categoryPath}/${path}/all`,
			active: guidePath === path,
		})
	})

	return <GlobalUISelect array={items} link />
}

GeneralFilterGuides.defaultProps = {
	directionPath: 'all',
	categoryPath: 'all',
}

GeneralFilterGuides.propTypes = {
	directionPath: PropTypes.string,
	categoryPath: PropTypes.string,
	guides: PropTypes.array.isRequired,
	directionIncludes: PropTypes.bool.isRequired,
}

export default GeneralFilterGuides
