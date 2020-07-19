import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../global/link'

const HeaderDestinationsOpenMenu = ({ directions }) => {
	return (
		<div className="hover__menu">
			{directions.map(({ node: { id, name, path } }) => (
				<Link key={id} to={`/${path}`} className="hover__menu-item">
					<div className="hover__menu-item-picture" />
					<div className="hover__menu-item-name">{name}</div>
				</Link>
			))}
		</div>
	)
}

HeaderDestinationsOpenMenu.propTypes = {
	directions: PropTypes.array.isRequired,
}

export default HeaderDestinationsOpenMenu
