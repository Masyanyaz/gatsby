import React from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'
import ColumnEndPages from '../components/column/endPages'
import GlobalArrowUp from '../components/global/arrowUp'

const LayoutsPages = ({ children, columnBlocksInfo }) => {
	return (
		<div className="page">
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<ColumnEndPages columnBlocksInfo={columnBlocksInfo} />
			</div>
			<Footer />
			<FormsPopup />
			<GlobalArrowUp />
		</div>
	)
}

LayoutsPages.propTypes = {
	children: PropTypes.node.isRequired,
}

export default LayoutsPages
