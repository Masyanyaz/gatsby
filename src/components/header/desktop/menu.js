import React from 'react'

import HeaderDestinations from '../destinations'
import HeaderInspirations from '../inspirations'
import HeaderServices from '../services'

const HeaderDesktopMenu = () => {
	return (
		<div className="header__menu-left-side">
			<HeaderDestinations />
			<HeaderInspirations />
			<HeaderServices />
		</div>
	)
}

export default HeaderDesktopMenu
