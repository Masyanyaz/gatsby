import React from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'
import ColumnEndPages from '../components/column/endPages'

const LayoutsPages = ({ children, columnBlocksInfo }) => {
	return (
		<div className="page">
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<ColumnEndPages columnBlocksInfo={columnBlocksInfo} />
				<FormsPopup />
			</div>
			<Footer />
		</div>
	)
}

LayoutsPages.propTypes = {
	children: PropTypes.node.isRequired,
	columnBlocksInfo: PropTypes.func.isRequired,
}

export default LayoutsPages
