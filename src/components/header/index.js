import React from 'react'

import HeaderDesktop from './desktop'

import useWindowSize from '../../hooks/windowSize'

const Header = () => {
	const width = useWindowSize()

	return <>{width > 992 ? <HeaderDesktop /> : <HeaderDesktop />}</>
}

export default Header
