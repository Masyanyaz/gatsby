import React from 'react'
import Link from '../global/link'

const OpenMenu = ({ items, dataItem = 'directions' }) => {
	return (
		<div className="hover__menu">
			{items.map(({ node }) => (
				<Link
					key={node.id}
					to={
						dataItem === 'directions'
							? `/${node.path}`
							: `/catalogue/filters/tours/all/${node.path}/all/all`
					}
					className="hover__menu-item"
				>
					<div className="hover__menu-item-picture" />
					<div className="hover__menu-item-name">{node.name}</div>
				</Link>
			))}
		</div>
	)
}

export default OpenMenu
