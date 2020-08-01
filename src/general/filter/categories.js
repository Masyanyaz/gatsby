import React from 'react'
import PropTypes from 'prop-types'

import GlobalUISelect from '../../components/global/UI/select'
import { useAllCategories } from '../../fragments/categories'

const GeneralFilterCategories = ({ directionPath, guidePath, categoryPath }) => {
	const categories = useAllCategories()

	const linkAllCategory =
		guidePath === 'all' && directionPath !== 'all'
			? `/${directionPath}`
			: `/catalogue/filters/tours/${directionPath}/all/${guidePath}/all`

	const items = [
		{
			id: 'all',
			text: 'Все',
			value: linkAllCategory,
			active: categoryPath === 'all',
		},
	]
	categories.forEach(({ node: { id, name, path, tours } }) => {
		if (tours.length) {
			items.push({
				id,
				text: name,
				value: `/catalogue/filters/tours/${directionPath}/${path}/${guidePath}/all`,
				active: categoryPath === path,
			})
		}
	})

	return <GlobalUISelect array={items} link />
}

GeneralFilterCategories.defaultProps = {
	directionPath: 'all',
	guidePath: 'all',
}

GeneralFilterCategories.propTypes = {
	directionPath: PropTypes.string,
	guidePath: PropTypes.string,
}

export default GeneralFilterCategories
