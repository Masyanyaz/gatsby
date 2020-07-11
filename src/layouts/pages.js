import React from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'
import ColumnEndPages from '../components/column/endPages'

const LayoutsPages = ({ children, componentInfo }) => {
	return (
		<div className="page">
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<ColumnEndPages componentInfo={componentInfo} />
				<FormsPopup />
			</div>
			<Footer />
		</div>
	)
}

LayoutsPages.propTypes = {
	children: PropTypes.node.isRequired,
	componentInfo: PropTypes.func.isRequired,
}

export default LayoutsPages
