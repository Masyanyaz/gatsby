import React from 'react'

import Link from '../../components/global/link'

const GeneralFilterCategories = ({
	directionPath,
	categories,
	seasonPath,
	typePath,
	directionIncludes,
}) => {
	const linkAllCategory =
		seasonPath === 'all' && directionIncludes
			? `/${directionPath}`
			: `/catalogue/filters/tours/${directionPath}/all/${seasonPath}/${typePath}`

	return (
		<div>
			<Link to={linkAllCategory} activeClassName={'active'}>
				Все
			</Link>
			{categories.map(({ node: { id, name, path } }) => (
				<Link
					key={id}
					to={`/catalogue/filters/tours/${directionPath}/${path}/${seasonPath}/${typePath}`}
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
	seasonPath: 'all',
	typePath: 'all',
}

export default GeneralFilterCategories