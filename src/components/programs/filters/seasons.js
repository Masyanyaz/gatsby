import React from 'react'
import Link from '../../global/link'

const SeasonsBlockFilter = ({
	directionPath,
	seasons,
	categoryPath,
	typePath,
	directionIncludes,
}) => {
	const linkAllSeasons =
		categoryPath === 'all' && directionIncludes
			? `/${directionPath}`
			: `/catalogue/filters/tours/${directionPath}/${categoryPath}/all/${typePath}`

	return (
		<div>
			<Link to={linkAllSeasons} activeClassName={'active'}>
				Все
			</Link>
			{seasons.map(({ node: { id, name, path } }) => (
				<Link
					key={id}
					to={`/catalogue/filters/tours/${directionPath}/${categoryPath}/${path}/${typePath}`}
					activeClassName={'active'}
				>
					{name}
				</Link>
			))}
		</div>
	)
}

SeasonsBlockFilter.defaultProps = {
	directionPath: 'all',
	categoryPath: 'all',
	typePath: 'all',
}

export default SeasonsBlockFilter
