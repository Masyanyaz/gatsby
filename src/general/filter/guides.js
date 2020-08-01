import React from 'react'
import PropTypes from 'prop-types'

import GlobalUISelect from '../../components/global/UI/select'
import { useAllGuides } from '../../fragments/guides'

const GeneralFilterGuides = ({ directionPath, categoryPath, guidePath }) => {
	const guides = useAllGuides()

	const linkAllGuides =
		categoryPath === 'all' && directionPath !== 'all'
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
	guides.forEach(({ node: { id, name, path, tours } }) => {
		if (tours.length) {
			items.push({
				id,
				text: name,
				value: `/catalogue/filters/tours/${directionPath}/${categoryPath}/${path}/all`,
				active: guidePath === path,
			})
		}
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
}

export default GeneralFilterGuides
