import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../global/link'

const HeaderInspirationsOpenMenu = ({ inspirations }) => {
	return (
		<div className="hover__menu">
			{inspirations.map(({ node }) => (
				<Link key={node.id} to={`/${node.path}`} className="hover__menu-item">
					<div className="hover__menu-item-picture" />
					<div className="hover__menu-item-name">{node.name}</div>
				</Link>
			))}
		</div>
	)
}

HeaderInspirationsOpenMenu.propTypes = {
	inspirations: PropTypes.array.isRequired,
}

export default HeaderInspirationsOpenMenu
