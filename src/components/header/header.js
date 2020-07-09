import React, { useState, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import './header-menu.css'

import DesktopMenu from './desktopMenu'
import ButtonOpenPopupForm from '../forms/popup/buttonOpenPopupForm'

const Header = () => {
	const data = useStaticQuery(graphql`
		{
			allStrapiDirections {
				edges {
					node {
						id
						name
						path
					}
				}
			}
			allStrapiCategories {
				edges {
					node {
						id
						name
						path
					}
				}
			}
		}
	`)
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		function onScroll() {
			let currentPosition = window.pageYOffset
			setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [scrollTop])

	const isScrolling = scrollTop > 0

	return (
		<>
			{isScrolling && <div style={{ height: '180px' }} />}
			<header className={isScrolling ? 'scrolled' : ''}>
				<div className="header__menu">
					<DesktopMenu
						directions={data.allStrapiDirections.edges}
						categories={data.allStrapiCategories.edges}
					/>
					<div className="header__menu-center">
						<Link to="/">
							<img src="https://cuisinedevoyage.com/img/logo-v2t.svg" alt="" />
						</Link>{' '}
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
							<ButtonOpenPopupForm
								text="envoyer une demande"
								className="header__menu-right-side-top-button"
							/>
						</div>
						<div className="header__menu-right-side-bottom">
							<Link to="/catalogue/tours" className="header__menu-right-side-bottom-element">
								Tours
							</Link>

							<Link to="/catalogue/excursions" className="header__menu-right-side-bottom-element">
								Excursions
							</Link>

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
		</>
	)
}

export default Header
