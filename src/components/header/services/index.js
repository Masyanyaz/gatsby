import React from 'react'

import HeaderServicesOpenMenu from './openMenu'

const HeaderServices = () => {
	const items = [
		{
			node: {
				id: 1,
				name: 'Tours',
				path: 'catalogue/tours',
			},
		},
		{
			node: {
				id: 2,
				name: 'Excursions',
				path: 'catalogue/excursions',
			},
		},
	]

	return <HeaderServicesOpenMenu items={items} />
}

export default HeaderServices
