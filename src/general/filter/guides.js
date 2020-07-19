import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/global/link'

const GeneralFilterGuides = ({ directionPath, guides, categoryPath, directionIncludes }) => {
	const linkAllSeasons =
		categoryPath === 'all' && directionIncludes
			? `/${directionPath}`
			: `/catalogue/filters/tours/${directionPath}/${categoryPath}/all/all`

	return (
		<div>
			<Link partiallyActive to={linkAllSeasons} activeClassName={'active'}>
				Все
			</Link>
			{guides.map(({ node: { id, name, path, disabled } }) => (
				<Link
					style={{ opacity: disabled ? 0.5 : 1 }}
					partiallyActive
					key={id}
					to={`/catalogue/filters/tours/${directionPath}/${categoryPath}/${path}/all`}
					activeClassName={'active'}
				>
					{name}
				</Link>
			))}
		</div>
	)
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
