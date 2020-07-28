import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../global/link'
import withOpenMenu from '../withOpenMenu'

const HeaderInspirationsOpenMenu = ({ items }) => {
	return (
		<div className="hover__menu">
			{items.map(({ node: { id, name, path } }) => (
				<Link key={id} to={`/${path}`} className="hover__menu-item">
					<div className="hover__menu-item-picture" />
					<div className="hover__menu-item-name">{name}</div>
				</Link>
			))}
		</div>
	)
}

HeaderInspirationsOpenMenu.propTypes = {
	items: PropTypes.array.isRequired,
}

export default withOpenMenu(HeaderInspirationsOpenMenu, 'Inspirations')
