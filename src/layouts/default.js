import React from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'
import GlobalArrowUp from '../components/global/arrowUp'

const LayoutsDefault = ({ children }) => {
	return (
		<>
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
			</div>
			<Footer />
			<FormsPopup />
			<GlobalArrowUp />
		</>
	)
}

LayoutsDefault.propTypes = {
	children: PropTypes.node.isRequired,
}

export default LayoutsDefault
