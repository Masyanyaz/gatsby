import React, { useState } from 'react'

import OpenMenu from './openMenu'

const menuItems = [
	{
		id: 1,
		name: 'Destinations',
		data: 'directions',
	},
	{
		id: 2,
		name: 'Inspirations',
		data: 'categories',
	},
	// {
	// 	id: 3,
	// 	name: 'Services',
	// 	data: 'directions',
	// },
]

const DesktopMenu = (props) => {
	const [isOpen, setOpen] = useState(false)
	const [item, setItem] = useState(null)

	const openMenu = (e) => {
		const dataItem = e.target.dataset.item

		if (dataItem !== item) {
			setOpen(false)
		}

		setOpen((isOpen) => !isOpen)
		setItem(dataItem)
	}

	return (
		<div className="header__menu-left-side">
			{isOpen && <OpenMenu items={props[item]} dataItem={item} />}
			{menuItems.map((menuItem) => (
				<div
					role="button"
					tabIndex="0"
					key={menuItem.id}
					data-item={menuItem.data}
					className="header__menu-left-side-element"
					onClick={openMenu}
				>
					{menuItem.name}
				</div>
			))}
		</div>
	)
}

export default DesktopMenu
