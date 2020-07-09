import React from 'react'

import Link from '../../components/global/link'

const GeneralFilterDirections = ({
	directions,
	categoryPath,
	seasonPath,
	typePath,
	directionIncludes,
}) => {
	return (
		<div>
			<Link
				to={`/catalogue/filters/tours/all/${categoryPath}/${seasonPath}/all`}
				activeClassName={'active'}
			>
				Все
			</Link>
			{directions.map(({ node: { id, name, path } }) => {
				const linkDirection =
					(!directionIncludes && categoryPath === 'all' && seasonPath === 'all') ||
					(directionIncludes && categoryPath === 'all' && seasonPath === 'all')
						? `/${path}`
						: `/catalogue/filters/tours/${path}/${categoryPath}/${seasonPath}/${typePath}`
				return (
					<Link key={id} to={linkDirection} activeClassName={'active'}>
						{name}
					</Link>
				)
			})}
		</div>
	)
}

GeneralFilterDirections.defaultProps = {
	categoryPath: 'all',
	seasonPath: 'all',
	typePath: 'all',
}

export default GeneralFilterDirections
