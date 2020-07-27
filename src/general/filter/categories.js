import React from 'react'
import PropTypes from 'prop-types'

import GlobalUISelect from '../../components/global/UI/select'

const GeneralFilterCategories = ({
	directionPath,
	categories,
	guidePath,
	directionIncludes,
	categoryPath,
}) => {
	const linkAllCategory =
		guidePath === 'all' && directionIncludes
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
	categories.forEach(({ node: { id, name, path } }) => {
		items.push({
			id,
			text: name,
			value: `/catalogue/filters/tours/${directionPath}/${path}/${guidePath}/all`,
			active: categoryPath === path,
		})
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
	categories: PropTypes.array.isRequired,
	directionIncludes: PropTypes.bool.isRequired,
}

export default GeneralFilterCategories
