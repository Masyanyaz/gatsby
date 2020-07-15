import React from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'

const LayoutsDefault = ({ children }) => {
	return (
		<>
			<Header />
			<div className="content">
				<div className="main-content" style={{ width: '100%' }}>
					<main>{children}</main>
				</div>
				<FormsPopup />
			</div>
			<Footer />
		</>
	)
}

LayoutsDefault.propTypes = {
	children: PropTypes.node.isRequired,
}

export default LayoutsDefault
