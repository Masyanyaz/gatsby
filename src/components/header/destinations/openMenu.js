import React from 'react'
import Link from '../../global/link'

const DestinationsOpenMenu = ({ items, dataItem = 'directions' }) => {
	return (
		<div className="hover__menu">
			{items.map(({ node }) => (
				<Link key={node.id} to={`/${node.path}`} className="hover__menu-item">
					<div className="hover__menu-item-picture" />
					<div className="hover__menu-item-name">{node.name}</div>
				</Link>
			))}
		</div>
	)
}

export default DestinationsOpenMenu
