import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/global/link'

const GeneralFilterDirections = ({ directions, categoryPath, guidePath, directionIncludes }) => {
	return (
		<div>
			<Link
				partiallyActive
				to={`/catalogue/filters/tours/all/${categoryPath}/${guidePath}/all`}
				activeClassName={'active'}
			>
				Все
			</Link>
			{directions.map(({ node: { id, name, path } }) => {
				const linkDirection =
					(!directionIncludes && categoryPath === 'all' && guidePath === 'all') ||
					(directionIncludes && categoryPath === 'all' && guidePath === 'all')
						? `/${path}`
						: `/catalogue/filters/tours/${path}/${categoryPath}/${guidePath}/all`
				return (
					<Link partiallyActive key={id} to={linkDirection} activeClassName={'active'}>
						{name}
					</Link>
				)
			})}
		</div>
	)
}

GeneralFilterDirections.defaultProps = {
	categoryPath: 'all',
	guidePath: 'all',
}

GeneralFilterDirections.propTypes = {
	categoryPath: PropTypes.string,
	guidePath: PropTypes.string,
	directions: PropTypes.array.isRequired,
	directionIncludes: PropTypes.bool.isRequired,
}

export default GeneralFilterDirections
