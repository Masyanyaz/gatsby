import React from 'react'
import Link from '../../global/link'

const InspirationsOpenMenu = ({ items }) => {
	return (
		<div className="hover__menu">
			{items.map(({ node }) => (
				<Link
					key={node.id}
					to={`/catalogue/filters/tours/all/${node.path}/all/all`}
					className="hover__menu-item"
				>
					<div className="hover__menu-item-picture" />
					<div className="hover__menu-item-name">{node.name}</div>
				</Link>
			))}
		</div>
	)
}

export default InspirationsOpenMenu
