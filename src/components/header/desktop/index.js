import React, { useState, useEffect } from 'react'

import './index.css'

import HeaderDesktopMenu from './menu'
import FormsPopupButton from '../../forms/popup/button'
import useScrollPosition from '../../../hooks/scrollPosition'
import Link from '../../global/link'

const HeaderDesktop = () => {
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		setScrollTop(window.scrollY)
	}, [])

	useScrollPosition(
		({ currPos }) => {
			if (currPos.y < 20) {
				setScrollTop(currPos.y)
			}
		},
		[],
		null,
		true,
	)

	const isScrolling = scrollTop > 0

	return (
		<div style={{ paddingTop: isScrolling ? '165px' : 0 }}>
			<header className={isScrolling ? 'scrolled' : ''}>
				<div className="header__menu">
					<HeaderDesktopMenu />
					<div className="header__menu-center">
						<Link to="/">
							<img src="https://cuisinedevoyage.com/img/logo-v2t.svg" alt="" />
						</Link>
						<span>Voyagez a votre gout!</span>
					</div>
					<div className="header__menu-right-side">
						<div className="header__menu-right-side-top">
							<Link to="#">
								<img src="https://cuisinedevoyage.com/img/mail.svg" alt="" />
							</Link>
							<Link to="#">
								<img className="phone" src="https://cuisinedevoyage.com/img/phone.svg" alt="" />
							</Link>
							<div className="header__button">
								<FormsPopupButton
									text="envoyer une demande"
									className="header__menu-right-side-top-button"
								/>
							</div>
						</div>
						<div className="header__menu-right-side-bottom">
							<Link to="#" className="header__menu-right-side-bottom-element">
								Qui sommes-nous
							</Link>
							<Link to="#" className="header__menu-right-side-bottom-element">
								Nouvelles
							</Link>
							<Link to="#" className="header__menu-right-side-bottom-element">
								Contacts
							</Link>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default HeaderDesktop
