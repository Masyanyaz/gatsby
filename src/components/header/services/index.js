import React, { useRef, useState } from 'react'

import useOnClickOutside from '../../../hooks/onClickOutside'
import Link from '../../global/link'
import GlobalUIButton from '../../global/UI/button'

const HeaderServices = () => {
	const [isOpen, setOpen] = useState(false)

	const ref = useRef()

	useOnClickOutside(ref, () => setOpen(false))

	return (
		<>
			<div className="header__menu-left-side-element" ref={ref}>
				<GlobalUIButton onClick={() => setOpen(true)}>Services</GlobalUIButton>
				{isOpen && (
					<div className="hover__menu">
						<Link to={`/catalogue/tours`} className="hover__menu-item">
							<div className="hover__menu-item-picture" />
							<div className="hover__menu-item-name">Tours</div>
						</Link>
						<Link to={`/catalogue/excursions`} className="hover__menu-item">
							<div className="hover__menu-item-picture" />
							<div className="hover__menu-item-name">Excursions</div>
						</Link>
					</div>
				)}
			</div>
		</>
	)
}

export default HeaderServices
