import React from 'react'

import Link from '../../components/global/link'

const GeneralFilterCategories = ({
	directionPath,
	categories,
	guidePath,
	typePath,
	directionIncludes,
}) => {
	const linkAllCategory =
		guidePath === 'all' && directionIncludes
			? `/${directionPath}`
			: `/catalogue/filters/tours/${directionPath}/all/${guidePath}/${typePath}`

	return (
		<div>
			<Link partiallyActive to={linkAllCategory} activeClassName={'active'}>
				Все
			</Link>
			{categories.map(({ node: { id, name, path } }) => (
				<Link
					partiallyActive
					key={id}
					to={`/catalogue/filters/tours/${directionPath}/${path}/${guidePath}/${typePath}`}
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
	typePath: 'all',
}

export default GeneralFilterCategories
