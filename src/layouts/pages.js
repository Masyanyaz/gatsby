import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'
import FormsPopupButton from '../components/forms/popup/button'
import ColumnBlocksReview from '../components/column/blocks/review'

const LayoutsPages = ({ children, componentInfo }) => {
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
			<Header className={'page'} />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<div className={`right-column ${isScrolling ? 'fixed' : ''}`}>
					{componentInfo()}
					<FormsPopupButton text="Слыш, купи" className="column__button" />
					<ColumnBlocksReview />
				</div>
				<FormsPopup />
			</div>
			<Footer />
		</>
	)
}

LayoutsPages.propTypes = {
	children: PropTypes.node.isRequired,
	componentInfo: PropTypes.func.isRequired,
}

export default LayoutsPages
