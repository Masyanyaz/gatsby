import React, { useRef, useState } from 'react'

import useOnClickOutside from '../../hooks/onClickOutside'
import GlobalUIButton from '../global/UI/button'

const withOpenMenu = (Component, label) => {
	return (props) => {
		const [isOpen, setOpen] = useState(false)

		const openClick = () => setOpen((isOpen) => !isOpen)
		const closeClick = () => setOpen(false)

		const ref = useRef()

		useOnClickOutside(ref, closeClick)

		return (
			<div className="header__menu-left-side-element" ref={ref}>
				<GlobalUIButton onClick={openClick}>{label}</GlobalUIButton>
				{isOpen && <Component {...props} />}
			</div>
		)
	}
}

export default withOpenMenu
