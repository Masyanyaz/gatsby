import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/global/link'

const GeneralFilterCategories = ({ directionPath, categories, guidePath, directionIncludes }) => {
	const linkAllCategory =
		guidePath === 'all' && directionIncludes
			? `/${directionPath}`
			: `/catalogue/filters/tours/${directionPath}/all/${guidePath}/all`

	return (
		<div>
			<Link partiallyActive to={linkAllCategory} activeClassName={'active'}>
				Все
			</Link>
			{categories.map(({ node: { id, name, path, disabled } }) => (
				<Link
					// style={{ opacity: disabled ? 0.5 : 1 }}
					partiallyActive
					key={id}
					to={`/catalogue/filters/tours/${directionPath}/${path}/${guidePath}/all`}
					activeClassName={'active'}
				>
					{name}
				</Link>
			))}
		</div>
	)
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
