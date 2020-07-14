import React from 'react'

import HeaderDestinations from './destinations'
import HeaderInspirations from './inspirations'

const DesktopMenu = () => {
	// console.log(1)
	return (
		<div className="header__menu-left-side">
			<HeaderDestinations />
			<HeaderInspirations />
			<div className="header__menu-left-side-element">Services</div>
		</div>
	)
}

export default DesktopMenu
