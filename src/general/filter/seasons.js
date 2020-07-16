import React from 'react'
import Link from '../../components/global/link'

const GeneralFilterSeasons = ({
	directionPath,
	guides,
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
			<Link partiallyActive to={linkAllSeasons} activeClassName={'active'}>
				Все
			</Link>
			{guides.map(({ node: { id, name, path } }) => (
				<Link
					partiallyActive
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

GeneralFilterSeasons.defaultProps = {
	directionPath: 'all',
	categoryPath: 'all',
	typePath: 'all',
}

export default GeneralFilterSeasons
